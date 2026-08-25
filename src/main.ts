import { Subject, Question } from './data/types';
import { SUBJECTS, getSubjectById } from './data/subjects';
import { PEExam } from './data/pe_types';
import { PE_EXAMS, getPEExamById } from './data/pe_exams';
import { peSimulator } from './pe_simulator';

interface SubjectState {
  userAnswers: Record<number, number | number[]>;
  lastWrongQuestionIds: number[];
  pendingRetryQueue: number[];
  currentIndex: number;
  filterMode: 'all' | 'wrong_only';
}

export function isQuestionCorrect(q: Question, userAnswer: number | number[] | undefined): boolean {
  if (userAnswer === undefined) return false;
  
  if (Array.isArray(q.answer)) {
    const targetSet = new Set(q.answer);
    if (Array.isArray(userAnswer)) {
      if (userAnswer.length !== targetSet.size) return false;
      return userAnswer.every(val => targetSet.has(val));
    } else {
      return targetSet.size === 1 && targetSet.has(userAnswer);
    }
  } else {
    if (Array.isArray(userAnswer)) {
      return userAnswer.length === 1 && userAnswer[0] === q.answer;
    }
    return userAnswer === q.answer;
  }
}

class AppRouter {
  private activeSubject: Subject | null = null;
  private activePEExam: PEExam | null = null;
  private currentPEQIndex: number = 0;
  private currentHomeFolder: 'all' | 'sba301' | 'dbi202' = 'all';
  private currentDBISubfolder: 'all' | 'fe' | 'pe' = 'all';

  private peUserCodeMap: Record<number, string> = {};
  private peUserDraftMap: Record<number, string> = {};
  private isHintShowingMap: Record<number, boolean> = {};

  private subjectStates: Record<string, SubjectState> = {};

  constructor() {
    this.initSubjectStates();
    this.initEventListeners();
    this.initKeyboardListeners();
    this.handleRoute();
  }

  private initSubjectStates() {
    for (const sub of SUBJECTS) {
      this.subjectStates[sub.id] = this.loadSubjectState(sub.id);
    }
  }

  private loadSubjectState(subjectId: string): SubjectState {
    try {
      const savedAnswers = localStorage.getItem(`quiz_${subjectId}_answers`);
      const savedWrong = localStorage.getItem(`quiz_${subjectId}_wrong_ids`);
      const savedIndex = localStorage.getItem(`quiz_${subjectId}_current_index`);
      const savedQueue = localStorage.getItem(`quiz_${subjectId}_retry_queue`);

      return {
        userAnswers: savedAnswers ? JSON.parse(savedAnswers) : {},
        lastWrongQuestionIds: savedWrong ? JSON.parse(savedWrong) : [],
        pendingRetryQueue: savedQueue ? JSON.parse(savedQueue) : [],
        currentIndex: savedIndex ? parseInt(savedIndex, 10) || 0 : 0,
        filterMode: 'all'
      };
    } catch (e) {
      return {
        userAnswers: {},
        lastWrongQuestionIds: [],
        pendingRetryQueue: [],
        currentIndex: 0,
        filterMode: 'all'
      };
    }
  }

  private saveSubjectState(subjectId: string) {
    const state = this.subjectStates[subjectId];
    if (!state) return;
    try {
      localStorage.setItem(`quiz_${subjectId}_answers`, JSON.stringify(state.userAnswers));
      localStorage.setItem(`quiz_${subjectId}_wrong_ids`, JSON.stringify(state.lastWrongQuestionIds));
      localStorage.setItem(`quiz_${subjectId}_current_index`, state.currentIndex.toString());
      localStorage.setItem(`quiz_${subjectId}_retry_queue`, JSON.stringify(state.pendingRetryQueue));
    } catch (e) {
      console.error(`Failed to save state for ${subjectId}:`, e);
    }
  }

  private initEventListeners() {
    window.addEventListener('hashchange', () => this.handleRoute());

    document.getElementById('btn-back-home')?.addEventListener('click', () => {
      window.location.hash = '#home';
    });

    document.getElementById('btn-pe-back-home')?.addEventListener('click', () => {
      window.location.hash = '#home';
    });

    document.getElementById('btn-reset-all')?.addEventListener('click', () => this.resetAll());
    document.getElementById('btn-retry-wrong')?.addEventListener('click', () => this.retryWrong());

    document.getElementById('btn-show-all-mode')?.addEventListener('click', () => {
      if (!this.activeSubject) return;
      const state = this.subjectStates[this.activeSubject.id];
      state.filterMode = 'all';
      state.currentIndex = 0;
      this.renderQuizView();
    });

    document.getElementById('btn-prev')?.addEventListener('click', () => this.prevQuestion());
    document.getElementById('btn-next')?.addEventListener('click', () => this.nextQuestion());

    // Home Navigation Listeners
    document.querySelectorAll('#home-subject-nav .nav-folder-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const folder = (e.currentTarget as HTMLElement).getAttribute('data-folder') as 'all' | 'sba301' | 'dbi202';
        if (folder) {
          this.currentHomeFolder = folder;
          this.currentDBISubfolder = 'all';
          this.renderHomeView();
        }
      });
    });

    document.querySelectorAll('#dbi-subfolder-nav .subfolder-tab').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const subfolder = (e.currentTarget as HTMLElement).getAttribute('data-subfolder') as 'all' | 'fe' | 'pe';
        if (subfolder) {
          this.currentDBISubfolder = subfolder;
          this.renderHomeView();
        }
      });
    });

    document.getElementById('btn-home-back')?.addEventListener('click', () => {
      if (this.currentDBISubfolder !== 'all') {
        this.currentDBISubfolder = 'all';
      } else {
        this.currentHomeFolder = 'all';
      }
      this.renderHomeView();
    });

    // PE Simulator Listeners
    document.getElementById('btn-toggle-hint')?.addEventListener('click', () => this.togglePEHint());
    document.getElementById('btn-run-sql')?.addEventListener('click', () => this.runCurrentSQL());
    document.getElementById('btn-submit-pe')?.addEventListener('click', () => this.submitCurrentPE());
    document.getElementById('btn-reset-pe-db')?.addEventListener('click', () => {
      peSimulator.resetDatabase();
      this.renderPESchemaInspector();
      alert("Đã khôi phục dữ liệu mẫu ban đầu cho CSDL!");
    });
  }

  private initKeyboardListeners() {
    window.addEventListener('keydown', (e: KeyboardEvent) => {
      if (['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement)?.tagName)) {
        if (e.ctrlKey && e.key === 'Enter') {
          e.preventDefault();
          this.runCurrentSQL();
        }
        return;
      }

      if (this.activeSubject) {
        if (e.key === 'Escape') {
          window.location.hash = '#home';
          return;
        }

        const activeQuestions = this.getActiveQuestions();
        if (activeQuestions.length === 0) return;

        switch (e.key) {
          case 'ArrowLeft':
            e.preventDefault();
            this.prevQuestion();
            break;

          case 'ArrowRight':
            e.preventDefault();
            this.nextQuestion();
            break;

          case '1':
          case 'Numpad1':
          case 'a':
          case 'A':
            this.selectAnswerForCurrent(0);
            break;

          case '2':
          case 'Numpad2':
          case 'b':
          case 'B':
            this.selectAnswerForCurrent(1);
            break;

          case '3':
          case 'Numpad3':
          case 'c':
          case 'C':
            this.selectAnswerForCurrent(2);
            break;

          case '4':
          case 'Numpad4':
          case 'd':
          case 'D':
            this.selectAnswerForCurrent(3);
            break;
        }
      }
    });
  }

  private handleRoute() {
    const hash = window.location.hash || '#home';

    if (hash.startsWith('#quiz')) {
      const params = new URLSearchParams(hash.replace(/^#quiz\??/, ''));
      const subjectId = params.get('subject') || 'sba301';
      const subject = getSubjectById(subjectId);

      if (subject) {
        this.activeSubject = subject;
        this.activePEExam = null;
        this.showQuizView();
        return;
      }
    } else if (hash.startsWith('#pe')) {
      const params = new URLSearchParams(hash.replace(/^#pe\??/, ''));
      const examId = params.get('exam') || 'pe_exam1';
      const peExam = getPEExamById(examId);

      if (peExam) {
        this.activeSubject = null;
        this.activePEExam = peExam;
        this.showPEView();
        return;
      }
    }

    this.activeSubject = null;
    this.activePEExam = null;
    this.showHomeView();
  }

  private showHomeView() {
    document.getElementById('home-view')?.classList.remove('hidden');
    document.getElementById('quiz-view')?.classList.add('hidden');
    document.getElementById('pe-view')?.classList.add('hidden');

    document.title = 'FPTU Quiz Hub - Hệ Thống Ôn Thi Trắc Nghiệm & PE';
    this.renderHomeView();
  }

  private showQuizView() {
    document.getElementById('home-view')?.classList.add('hidden');
    document.getElementById('quiz-view')?.classList.remove('hidden');
    document.getElementById('pe-view')?.classList.add('hidden');

    if (this.activeSubject) {
      document.title = `${this.activeSubject.code} - ${this.activeSubject.title}`;
    }
    this.renderQuizView();
  }

  private async showPEView() {
    document.getElementById('home-view')?.classList.add('hidden');
    document.getElementById('quiz-view')?.classList.add('hidden');
    document.getElementById('pe-view')?.classList.remove('hidden');

    if (this.activePEExam) {
      document.title = `${this.activePEExam.code} - Giả Lập Thi PE SQL`;
      await peSimulator.loadExam(this.activePEExam);
      this.currentPEQIndex = 0;
      this.renderPEWorkbench();
    }
  }

  /* ==================== HOME VIEW RENDERING ==================== */
  private renderHomeView() {
    const subjectsGrid = document.getElementById('subjects-grid');
    const titleElem = document.getElementById('home-section-title');
    const subtitleElem = document.getElementById('home-section-subtitle');
    const breadcrumbBar = document.getElementById('home-breadcrumb-bar');
    const breadcrumb = document.getElementById('home-breadcrumb');
    const dbiSubfolderNav = document.getElementById('dbi-subfolder-nav');
    if (!subjectsGrid) return;

    // Update Top Subject Tabs Active State
    document.querySelectorAll('#home-subject-nav .nav-folder-btn').forEach(btn => {
      if (btn.getAttribute('data-folder') === this.currentHomeFolder) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    // Update DBI Subfolder Tabs Active State
    if (this.currentHomeFolder === 'dbi202') {
      dbiSubfolderNav?.classList.remove('hidden');
      document.querySelectorAll('#dbi-subfolder-nav .subfolder-tab').forEach(btn => {
        if (btn.getAttribute('data-subfolder') === this.currentDBISubfolder) {
          btn.classList.add('active');
        } else {
          btn.classList.remove('active');
        }
      });
    } else {
      dbiSubfolderNav?.classList.add('hidden');
    }

    // Update Breadcrumbs
    if (this.currentHomeFolder === 'all') {
      breadcrumbBar?.classList.add('hidden');
    } else {
      breadcrumbBar?.classList.remove('hidden');
      if (breadcrumb) {
        if (this.currentHomeFolder === 'sba301') {
          breadcrumb.innerHTML = `<span>🏠 Trang Chủ</span> <span class="bc-sep">/</span> <span class="bc-curr">⚛️ SBA301 (ReactJS)</span>`;
        } else if (this.currentHomeFolder === 'dbi202') {
          if (this.currentDBISubfolder === 'all') {
            breadcrumb.innerHTML = `<span>🏠 Trang Chủ</span> <span class="bc-sep">/</span> <span class="bc-curr">🗄️ DBI202 (Cơ Sở Dữ Liệu)</span>`;
          } else if (this.currentDBISubfolder === 'fe') {
            breadcrumb.innerHTML = `<span style="cursor:pointer;" id="bc-dbi-root">🏠 Trang Chủ / 🗄️ DBI202</span> <span class="bc-sep">/</span> <span class="bc-curr">📝 Thư Mục Đề FE (Trắc Nghiệm)</span>`;
            document.getElementById('bc-dbi-root')?.addEventListener('click', () => {
              this.currentDBISubfolder = 'all';
              this.renderHomeView();
            });
          } else if (this.currentDBISubfolder === 'pe') {
            breadcrumb.innerHTML = `<span style="cursor:pointer;" id="bc-dbi-root">🏠 Trang Chủ / 🗄️ DBI202</span> <span class="bc-sep">/</span> <span class="bc-curr">⚡ Thư Mục Đề PE (Thực Hành SQL)</span>`;
            document.getElementById('bc-dbi-root')?.addEventListener('click', () => {
              this.currentDBISubfolder = 'all';
              this.renderHomeView();
            });
          }
        }
      }
    }

    subjectsGrid.innerHTML = '';

    // Calculate Global Stats
    let totalAllQuestions = 0;
    let totalAllCompleted = 0;
    let totalAllCorrect = 0;

    SUBJECTS.forEach(sub => {
      const state = this.subjectStates[sub.id] || { userAnswers: {}, lastWrongQuestionIds: [], pendingRetryQueue: [], currentIndex: 0, filterMode: 'all' };
      const answeredCount = Object.keys(state.userAnswers).length;
      let correctCount = 0;
      sub.questions.forEach(q => {
        const uAns = state.userAnswers[q.id];
        if (uAns !== undefined && isQuestionCorrect(q, uAns)) correctCount++;
      });
      totalAllQuestions += sub.totalQuestions;
      totalAllCompleted += answeredCount;
      totalAllCorrect += correctCount;
    });

    // Update Global Overview Stats
    const totalQElem = document.getElementById('global-total-questions');
    const compQElem = document.getElementById('global-completed-questions');
    const rateQElem = document.getElementById('global-correct-rate');
    if (totalQElem) totalQElem.textContent = totalAllQuestions.toString();
    if (compQElem) compQElem.textContent = totalAllCompleted.toString();
    if (rateQElem) {
      const rate = totalAllCompleted > 0 ? Math.round((totalAllCorrect / totalAllCompleted) * 100) : 0;
      rateQElem.textContent = `${rate}%`;
    }

    // ================== CASE 1: ALL SUBJECTS VIEW ==================
    if (this.currentHomeFolder === 'all') {
      if (titleElem) titleElem.textContent = 'Danh Sách Môn Học';
      if (subtitleElem) subtitleElem.textContent = 'Chọn môn học để bắt đầu ôn luyện trắc nghiệm hoặc thi thực hành';

      // Card 1: SBA301
      const sbaSub = SUBJECTS.find(s => s.id === 'sba301');
      if (sbaSub) {
        subjectsGrid.appendChild(this.createQuizCardElement(sbaSub));
      }

      // Card 2: DBI202 Subject Hub Card
      const dbiCard = document.createElement('div');
      dbiCard.className = 'subject-card dbi-master-card';
      dbiCard.innerHTML = `
        <div>
          <div class="subject-card-header">
            <span class="subject-badge-pill" style="background: rgba(14, 165, 233, 0.2); color: #38bdf8; border: 1px solid rgba(14, 165, 233, 0.4);">🗄️ DBI202</span>
            <span class="subject-qcount-badge">13 Đề FE + 1 Đề PE</span>
          </div>
          <div class="subject-card-body">
            <h4 class="subject-title">DBI202 - Hệ Quản Trị Cơ Sở Dữ Liệu</h4>
            <div class="subject-subtitle-text">Database Systems • SQL Server & Relational Design</div>
            <p class="subject-desc">Hệ thống đầy đủ tài liệu ôn thi môn DBI202 bao gồm 13 bộ đề trắc nghiệm Final Exam (FE) và phòng thi giả lập thực hành SQL (PE).</p>
            <div class="subject-tags">
              <span class="subject-tag">#FE_Trắc_Nghiệm</span>
              <span class="subject-tag">#PE_SQL_Server</span>
              <span class="subject-tag">#FPTU_Exam</span>
            </div>
          </div>
        </div>

        <div class="dbi-hub-actions">
          <button class="btn btn-primary btn-open-dbi-fe" style="width: 100%; margin-bottom: 0.5rem;">
            <span>📝 Mở Thư Mục Đề FE (Trắc Nghiệm)</span>
          </button>
          <button class="btn btn-outline-light btn-open-dbi-pe" style="width: 100%;">
            <span>⚡ Mở Thư Mục Đề PE (Thực Hành SQL)</span>
          </button>
        </div>
      `;

      dbiCard.querySelector('.btn-open-dbi-fe')?.addEventListener('click', () => {
        this.currentHomeFolder = 'dbi202';
        this.currentDBISubfolder = 'fe';
        this.renderHomeView();
      });

      dbiCard.querySelector('.btn-open-dbi-pe')?.addEventListener('click', () => {
        this.currentHomeFolder = 'dbi202';
        this.currentDBISubfolder = 'pe';
        this.renderHomeView();
      });

      subjectsGrid.appendChild(dbiCard);
      return;
    }

    // ================== CASE 2: SBA301 VIEW ==================
    if (this.currentHomeFolder === 'sba301') {
      if (titleElem) titleElem.textContent = 'Môn SBA301 - Lập Trình Frontend ReactJS';
      if (subtitleElem) subtitleElem.textContent = 'Bộ câu hỏi trắc nghiệm toàn diện về ReactJS, Hooks, State & Routing';

      const sbaSub = SUBJECTS.find(s => s.id === 'sba301');
      if (sbaSub) {
        subjectsGrid.appendChild(this.createQuizCardElement(sbaSub));
      }
      return;
    }

    // ================== CASE 3: DBI202 VIEW ==================
    if (this.currentHomeFolder === 'dbi202') {
      // Sub-case 3A: Both Folders Overview
      if (this.currentDBISubfolder === 'all') {
        if (titleElem) titleElem.textContent = 'DBI202 - Chọn Thư Mục Luyện Thi';
        if (subtitleElem) subtitleElem.textContent = 'Chọn thư mục Đề FE (Trắc Nghiệm) hoặc Đề PE (Thực Hành SQL)';

        // Folder 1: FE Folder Hero Card
        const feFolderCard = document.createElement('div');
        feFolderCard.className = 'subject-card folder-hero-card';
        feFolderCard.innerHTML = `
          <div>
            <div class="subject-card-header">
              <span class="subject-badge-pill" style="background: rgba(14, 165, 233, 0.2); color: #38bdf8;">📁 THƯ MỤC ĐỀ FE</span>
              <span class="subject-qcount-badge">13 Bộ Đề • 497 Câu</span>
            </div>
            <div class="subject-card-body">
              <h4 class="subject-title">📝 Đề Thi FE (Final Exam - Trắc Nghiệm)</h4>
              <div class="subject-subtitle-text">12 Đề Trắc Nghiệm SP26, FA25 & Đề Tổng Hợp</div>
              <p class="subject-desc">Toàn bộ câu hỏi trắc nghiệm ôn thi Final Exam DBI202 được gom theo từng mã đề thi thực tế (Đề 1 đến Đề 12) và bộ đề tổng hợp 497 câu không trùng lặp.</p>
              <div class="subject-tags">
                <span class="subject-tag">#12_Mã_Đề_FE</span>
                <span class="subject-tag">#Đề_Tổng_Hợp_497_Câu</span>
                <span class="subject-tag">#Chấm_Điểm_Tự_Động</span>
              </div>
            </div>
          </div>
          <div>
            <button class="btn btn-primary btn-enter-fe" style="width: 100%;">
              <span>📂 Xem Danh Sách Đề FE (13 Bộ Đề)</span>
            </button>
          </div>
        `;
        feFolderCard.querySelector('.btn-enter-fe')?.addEventListener('click', () => {
          this.currentDBISubfolder = 'fe';
          this.renderHomeView();
        });
        subjectsGrid.appendChild(feFolderCard);

        // Folder 2: PE Folder Hero Card
        const peFolderCard = document.createElement('div');
        peFolderCard.className = 'subject-card folder-hero-card';
        peFolderCard.innerHTML = `
          <div>
            <div class="subject-card-header">
              <span class="subject-badge-pill" style="background: rgba(168, 85, 247, 0.2); color: #c084fc;">📁 THƯ MỤC ĐỀ PE</span>
              <span class="subject-qcount-badge pe-badge">💻 Thực Hành SQL</span>
            </div>
            <div class="subject-card-body">
              <h4 class="subject-title">⚡ Đề Thi PE (Practical Exam - Thực Hành SQL)</h4>
              <div class="subject-subtitle-text">Môi Trường Giả Lập Thi PE SQL 100% Client-side</div>
              <p class="subject-desc">Luyện thi thực hành SQL chuẩn FPT với trình soạn thảo T-SQL Editor, bảng dữ liệu mẫu CSDL Hotel Booking 8 bảng, sơ đồ ERD trực quan và bộ chấm điểm tự động.</p>
              <div class="subject-tags">
                <span class="subject-tag">#PE_SQL_Server</span>
                <span class="subject-tag">#Sơ_Đồ_ERD</span>
                <span class="subject-tag">#Chấm_Output_Data</span>
              </div>
            </div>
          </div>
          <div>
            <button class="btn btn-primary btn-enter-pe" style="width: 100%;">
              <span>💻 Mở Thư Mục Đề PE (Thực Hành SQL)</span>
            </button>
          </div>
        `;
        peFolderCard.querySelector('.btn-enter-pe')?.addEventListener('click', () => {
          this.currentDBISubfolder = 'pe';
          this.renderHomeView();
        });
        subjectsGrid.appendChild(peFolderCard);
        return;
      }

      // Sub-case 3B: FE Exams List
      if (this.currentDBISubfolder === 'fe') {
        if (titleElem) titleElem.textContent = 'DBI202 - Danh Sách Đề FE (Trắc Nghiệm)';
        if (subtitleElem) subtitleElem.textContent = '12 Đề thi trắc nghiệm các kỳ SP26, FA25 & Bộ đề tổng hợp 497 câu';

        const dbiSubjects = SUBJECTS.filter(s => s.id !== 'sba301');
        dbiSubjects.forEach(sub => {
          subjectsGrid.appendChild(this.createQuizCardElement(sub));
        });
        return;
      }

      // Sub-case 3C: PE Exams List
      if (this.currentDBISubfolder === 'pe') {
        if (titleElem) titleElem.textContent = 'DBI202 - Danh Sách Đề PE (Thực Hành SQL)';
        if (subtitleElem) subtitleElem.textContent = 'Phòng thi giả lập thực hành SQL 10 câu với CSDL chuẩn FPT';

        PE_EXAMS.forEach(peExam => {
          subjectsGrid.appendChild(this.createPECardElement(peExam));
        });
        return;
      }
    }
  }

  private createQuizCardElement(sub: Subject): HTMLElement {
    const state = this.subjectStates[sub.id] || { userAnswers: {}, lastWrongQuestionIds: [], pendingRetryQueue: [], currentIndex: 0, filterMode: 'all' };
    const answeredCount = Object.keys(state.userAnswers).length;
    
    let correctCount = 0;
    let wrongCount = 0;

    sub.questions.forEach(q => {
      const uAns = state.userAnswers[q.id];
      if (uAns !== undefined) {
        if (isQuestionCorrect(q, uAns)) correctCount++;
        else wrongCount++;
      }
    });

    const pct = sub.totalQuestions > 0 
      ? Math.round((answeredCount / sub.totalQuestions) * 100) 
      : 0;

    const tags = sub.id === 'sba301'
      ? ['#React', '#JSX', '#Hooks', '#Router', '#API']
      : sub.id.includes('exam')
      ? ['#DBI202', '#FPTU_Exam', '#MultiChoice', '#SQL', '#Normalization']
      : ['#Database', '#SQL', '#Normalization', '#ERD', '#Triggers', '#ACID'];

    const card = document.createElement('div');
    card.className = `subject-card subject-${sub.id}`;
    card.innerHTML = `
      <div>
        <div class="subject-card-header">
          <span class="subject-badge-pill">${sub.icon} ${sub.code}</span>
          <span class="subject-qcount-badge">${sub.totalQuestions} Câu</span>
        </div>

        <div class="subject-card-body">
          <h4 class="subject-title">${sub.title}</h4>
          <div class="subject-subtitle-text">${sub.subtitle}</div>
          <p class="subject-desc">${sub.description}</p>
          <div class="subject-tags">
            ${tags.map(t => `<span class="subject-tag">${t}</span>`).join('')}
          </div>
        </div>
      </div>

      <div>
        <div class="subject-progress-box">
          <div class="progress-header">
            <span>Tiến độ hoàn thành:</span>
            <span class="progress-pct">${answeredCount} / ${sub.totalQuestions} (${pct}%)</span>
          </div>
          <div class="progress-track">
            <div class="progress-bar-fill" style="width: ${pct}%"></div>
          </div>
          <div class="progress-stats-row">
            <span class="progress-stat-correct">Đúng: ${correctCount}</span>
            <span class="progress-stat-wrong">Sai: ${wrongCount}</span>
            <span class="progress-stat-unanswered">Còn lại: ${sub.totalQuestions - answeredCount}</span>
          </div>
        </div>

        <button class="btn btn-primary btn-start-subject" data-subject-id="${sub.id}">
          <span>${answeredCount > 0 ? '▶️ Tiếp Tục Luyện Thi' : '🚀 Bắt Đầu Luyện Thi'}</span>
        </button>
      </div>
    `;

    card.querySelector('.btn-start-subject')?.addEventListener('click', () => {
      window.location.hash = `#quiz?subject=${sub.id}`;
    });

    return card;
  }

  private createPECardElement(peExam: PEExam): HTMLElement {
    const card = document.createElement('div');
    card.className = `subject-card pe-card-home`;
    card.innerHTML = `
      <div>
        <div class="subject-card-header">
          <span class="subject-badge-pill pe-pill">${peExam.icon} ${peExam.code}</span>
          <span class="subject-qcount-badge pe-badge">💻 10 Câu PE SQL</span>
        </div>

        <div class="subject-card-body">
          <h4 class="subject-title">${peExam.title}</h4>
          <div class="subject-subtitle-text">${peExam.subtitle}</div>
          <p class="subject-desc">${peExam.description}</p>
          <div class="subject-tags">
            <span class="subject-tag">#PE_SQL</span>
            <span class="subject-tag">#SQL_IDE</span>
            <span class="subject-tag">#JOIN</span>
            <span class="subject-tag">#Procedure</span>
            <span class="subject-tag">#Trigger</span>
          </div>
        </div>
      </div>

      <div>
        <button class="btn btn-primary btn-start-pe" data-pe-id="${peExam.id}">
          <span>💻 Mở IDE Giả Lập Thi PE SQL</span>
        </button>
      </div>
    `;

    card.querySelector('.btn-start-pe')?.addEventListener('click', () => {
      window.location.hash = `#pe?exam=${peExam.id}`;
    });

    return card;
  }

  /* ==================== QUIZ VIEW LOGIC ==================== */
  private getCurrentState(): SubjectState {
    if (!this.activeSubject) throw new Error("No active subject");
    if (!this.subjectStates[this.activeSubject.id]) {
      this.subjectStates[this.activeSubject.id] = this.loadSubjectState(this.activeSubject.id);
    }
    return this.subjectStates[this.activeSubject.id];
  }

  private getActiveQuestions(): Question[] {
    if (!this.activeSubject) return [];
    const state = this.getCurrentState();
    if (state.filterMode === 'wrong_only' && state.lastWrongQuestionIds.length > 0) {
      return this.activeSubject.questions.filter(q => state.lastWrongQuestionIds.includes(q.id));
    }
    return this.activeSubject.questions;
  }

  private selectAnswerForCurrent(optionIndex: number) {
    const activeQuestions = this.getActiveQuestions();
    if (!activeQuestions || activeQuestions.length === 0) return;
    const currentQ = activeQuestions[this.getCurrentState().currentIndex];
    if (currentQ) {
      this.selectAnswer(currentQ.id, optionIndex);
    }
  }

  private selectAnswer(questionId: number, optionIndex: number) {
    if (!this.activeSubject) return;
    const state = this.getCurrentState();
    const q = this.activeSubject.questions.find(item => item.id === questionId);
    if (!q) return;

    const isMultiChoice = Array.isArray(q.answer);

    if (isMultiChoice) {
      let currentSelection: number[] = [];
      const existing = state.userAnswers[questionId];
      if (Array.isArray(existing)) {
        currentSelection = [...existing];
      } else if (typeof existing === 'number') {
        currentSelection = [existing];
      }

      if (currentSelection.includes(optionIndex)) {
        currentSelection = currentSelection.filter(idx => idx !== optionIndex);
      } else {
        currentSelection.push(optionIndex);
        currentSelection.sort((a, b) => a - b);
      }

      if (currentSelection.length > 0) {
        state.userAnswers[questionId] = currentSelection;
      } else {
        delete state.userAnswers[questionId];
      }
    } else {
      state.userAnswers[questionId] = optionIndex;
    }

    const updatedUserAns = state.userAnswers[questionId];
    if (updatedUserAns !== undefined) {
      if (!isQuestionCorrect(q, updatedUserAns)) {
        if (!state.lastWrongQuestionIds.includes(questionId)) {
          state.lastWrongQuestionIds.push(questionId);
        }
      } else {
        state.lastWrongQuestionIds = state.lastWrongQuestionIds.filter(id => id !== questionId);
        if (state.pendingRetryQueue) {
          state.pendingRetryQueue = state.pendingRetryQueue.filter(id => id !== questionId);
        }
      }
    }

    this.saveSubjectState(this.activeSubject.id);
    this.renderQuizView();
  }

  private prevQuestion() {
    const state = this.getCurrentState();
    if (state.currentIndex > 0) {
      state.currentIndex--;
      if (this.activeSubject) this.saveSubjectState(this.activeSubject.id);
      this.renderQuizView();
    }
  }

  private nextQuestion() {
    const state = this.getCurrentState();
    const activeQuestions = this.getActiveQuestions();

    if (state.pendingRetryQueue && state.pendingRetryQueue.length > 0) {
      const nextWrongId = state.pendingRetryQueue.find(
        id => state.userAnswers[id] === undefined
      );

      if (nextWrongId !== undefined) {
        const nextIdx = activeQuestions.findIndex(q => q.id === nextWrongId);
        if (nextIdx !== -1 && nextIdx !== state.currentIndex) {
          state.currentIndex = nextIdx;
          if (this.activeSubject) this.saveSubjectState(this.activeSubject.id);
          this.renderQuizView();
          return;
        }
      }
    }

    if (state.currentIndex < activeQuestions.length - 1) {
      state.currentIndex++;
      if (this.activeSubject) this.saveSubjectState(this.activeSubject.id);
      this.renderQuizView();
    }
  }

  private jumpToQuestion(index: number) {
    const state = this.getCurrentState();
    const activeQuestions = this.getActiveQuestions();
    if (index >= 0 && index < activeQuestions.length) {
      state.currentIndex = index;
      if (this.activeSubject) this.saveSubjectState(this.activeSubject.id);
      this.renderQuizView();
    }
  }

  private resetAll() {
    if (!this.activeSubject) return;
    const confirmReset = window.confirm(`Bạn có chắc chắn muốn xóa toàn bộ tiến độ làm bài môn ${this.activeSubject.code} và làm lại từ đầu không?`);
    if (confirmReset) {
      const state = this.getCurrentState();
      state.userAnswers = {};
      state.lastWrongQuestionIds = [];
      state.pendingRetryQueue = [];
      state.currentIndex = 0;
      state.filterMode = 'all';
      this.saveSubjectState(this.activeSubject.id);
      this.renderQuizView();
    }
  }

  private retryWrong() {
    if (!this.activeSubject) return;
    const state = this.getCurrentState();
    if (state.lastWrongQuestionIds.length === 0) return;

    state.filterMode = 'wrong_only';
    state.pendingRetryQueue = [...state.lastWrongQuestionIds];

    state.lastWrongQuestionIds.forEach(id => {
      delete state.userAnswers[id];
    });

    state.currentIndex = 0;
    this.saveSubjectState(this.activeSubject.id);
    this.renderQuizView();
  }

  private renderQuizView() {
    if (!this.activeSubject) return;
    const sub = this.activeSubject;
    const state = this.getCurrentState();

    const quizBadge = document.getElementById('quiz-subject-badge');
    const quizTitle = document.getElementById('quiz-subject-title');
    const quizSubtitle = document.getElementById('quiz-subject-subtitle');

    if (quizBadge) {
      quizBadge.textContent = `${sub.icon} ${sub.code}`;
      quizBadge.className = `logo-badge ${sub.badgeClass}`;
    }
    if (quizTitle) quizTitle.textContent = sub.title;
    if (quizSubtitle) {
      quizSubtitle.innerHTML = `Mã đề: <span>${sub.code}</span> • ${sub.totalQuestions} câu`;
    }

    const activeQuestions = this.getActiveQuestions();
    
    if (state.currentIndex >= activeQuestions.length) {
      state.currentIndex = Math.max(0, activeQuestions.length - 1);
    }

    let correctCount = 0;
    let wrongCount = 0;
    const allQuestions = sub.questions;
    
    allQuestions.forEach(q => {
      const uAns = state.userAnswers[q.id];
      if (uAns !== undefined) {
        if (isQuestionCorrect(q, uAns)) correctCount++;
        else wrongCount++;
      }
    });

    const answeredCount = Object.keys(state.userAnswers).length;

    const progressText = document.getElementById('progress-text');
    if (progressText) {
      progressText.textContent = `${answeredCount} / ${sub.totalQuestions}`;
    }

    const modeBadge = document.getElementById('mode-badge');
    if (modeBadge) {
      modeBadge.textContent = `Đúng: ${correctCount} | Sai: ${wrongCount}`;
    }

    const retryWrongBtn = document.getElementById('btn-retry-wrong') as HTMLButtonElement;
    if (retryWrongBtn) {
      const wrongCountTotal = state.lastWrongQuestionIds.length;
      retryWrongBtn.disabled = wrongCountTotal === 0;
      retryWrongBtn.innerHTML = `<span class="icon">🎯</span> Làm Lại Các Câu Sai (${wrongCountTotal})`;
    }

    const filterNotice = document.getElementById('filter-notice');
    const wrongCountText = document.getElementById('wrong-count-text');
    if (filterNotice && wrongCountText) {
      if (state.filterMode === 'wrong_only') {
        filterNotice.classList.remove('hidden');
        wrongCountText.textContent = activeQuestions.length.toString();
      } else {
        filterNotice.classList.add('hidden');
      }
    }

    this.renderQuestionGrid(activeQuestions);
    this.renderQuestionCard(activeQuestions);
    this.renderPaginationBar(activeQuestions);
  }

  private renderQuestionGrid(activeQuestions: Question[]) {
    const gridContainer = document.getElementById('question-grid');
    if (!gridContainer || !this.activeSubject) return;

    const state = this.getCurrentState();
    gridContainer.innerHTML = '';

    activeQuestions.forEach((q, index) => {
      const item = document.createElement('div');
      item.className = 'grid-item';
      item.textContent = q.id.toString();

      const userAnswer = state.userAnswers[q.id];
      if (userAnswer !== undefined) {
        if (isQuestionCorrect(q, userAnswer)) {
          item.classList.add('correct');
        } else {
          item.classList.add('wrong');
        }
      }

      if (index === state.currentIndex) {
        item.classList.add('active');
      }

      item.addEventListener('click', () => {
        this.jumpToQuestion(index);
      });

      gridContainer.appendChild(item);
    });

    const activeItem = gridContainer.querySelector('.grid-item.active') as HTMLElement;
    if (activeItem) {
      activeItem.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }

  private renderQuestionCard(activeQuestions: Question[]) {
    const container = document.getElementById('questions-container');
    if (!container || activeQuestions.length === 0) return;

    const state = this.getCurrentState();
    const q = activeQuestions[state.currentIndex];
    if (!q) return;

    const userAnswer = state.userAnswers[q.id];
    const isAnswered = userAnswer !== undefined;
    const isCorrect = isAnswered && isQuestionCorrect(q, userAnswer);
    const isMultiChoice = Array.isArray(q.answer);

    const userAnsArray: number[] = Array.isArray(userAnswer)
      ? userAnswer
      : userAnswer !== undefined ? [userAnswer] : [];

    const targetAnsArray: number[] = Array.isArray(q.answer)
      ? q.answer
      : [q.answer];

    let codeSnippetHtml = '';
    if (q.codeSnippet) {
      codeSnippetHtml = `<pre class="code-snippet-box"><code>${q.codeSnippet}</code></pre>`;
    }

    const multiBadgeHtml = isMultiChoice 
      ? `<span class="multi-choice-badge">☑️ Chọn nhiều đáp án (${targetAnsArray.length} đáp án đúng)</span>`
      : ``;

    const optionsHtml = q.options.map((opt, idx) => {
      const letter = ['A', 'B', 'C', 'D', 'E', 'F'][idx] || `${idx + 1}`;
      let btnClass = 'option-btn';
      const isSelected = userAnsArray.includes(idx);
      const isTarget = targetAnsArray.includes(idx);

      if (isSelected) {
        btnClass += ' selected';
      }

      if (isAnswered) {
        if (isTarget) {
          btnClass += ' correct';
        } else if (isSelected) {
          btnClass += ' wrong';
        }
      }

      const checkIndicator = isMultiChoice 
        ? `<span class="checkbox-box ${isSelected ? 'checked' : ''}">${isSelected ? '✓' : ''}</span>`
        : ``;

      return `
        <button class="${btnClass}" data-opt-idx="${idx}">
          <span class="option-indicator">${letter}</span>
          ${checkIndicator}
          <span class="option-text">${opt}</span>
        </button>
      `;
    }).join('');

    let explanationHtml = '';
    if (isAnswered) {
      const expStatusClass = isCorrect ? 'correct' : 'wrong';
      const expTitle = isCorrect ? '✅ Chính xác!' : '❌ Chưa chính xác!';
      
      const correctLetters = targetAnsArray.map(i => ['A', 'B', 'C', 'D', 'E', 'F'][i]).join(', ');
      const defaultExp = isCorrect
        ? `Bạn đã chọn đúng phương án ${correctLetters}.`
        : `Đáp án đúng là ${correctLetters}.`;

      explanationHtml = `
        <div class="explanation-box ${expStatusClass}">
          <div class="explanation-header">
            <span>${expTitle}</span>
          </div>
          <p class="explanation-text">${q.explanation || defaultExp}</p>
        </div>
      `;
    }

    container.innerHTML = `
      <div class="card question-card">
        <div class="question-header">
          <span class="question-index">CÂU HỎI ${q.id} / ${this.activeSubject?.totalQuestions}</span>
          ${multiBadgeHtml}
        </div>
        <h2 class="question-title">${q.question}</h2>
        ${codeSnippetHtml}
        <div class="options-grid">
          ${optionsHtml}
        </div>
        ${explanationHtml}
      </div>
    `;

    container.querySelectorAll('.option-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const target = (e.currentTarget as HTMLElement);
        const optIdx = parseInt(target.getAttribute('data-opt-idx') || '0', 10);
        this.selectAnswer(q.id, optIdx);
      });
    });
  }

  private renderPaginationBar(activeQuestions: Question[]) {
    const state = this.getCurrentState();
    const prevBtn = document.getElementById('btn-prev') as HTMLButtonElement;
    const nextBtn = document.getElementById('btn-next') as HTMLButtonElement;
    const counterBadge = document.getElementById('question-counter-indicator');

    if (prevBtn) {
      prevBtn.disabled = state.currentIndex === 0;
    }
    if (nextBtn) {
      nextBtn.disabled = state.currentIndex === activeQuestions.length - 1;
    }
    if (counterBadge) {
      counterBadge.textContent = `Câu ${state.currentIndex + 1} / ${activeQuestions.length}`;
    }
  }

  /* ==================== PE SIMULATOR LOGIC ==================== */
  private renderPEWorkbench() {
    if (!this.activePEExam) return;
    const pe = this.activePEExam;

    const examTitle = document.getElementById('pe-exam-title');
    const examSubtitle = document.getElementById('pe-exam-subtitle');
    if (examTitle) examTitle.textContent = pe.title;
    if (examSubtitle) examSubtitle.textContent = pe.subtitle;

    // View toggle listeners
    const btnErd = document.getElementById('btn-view-erd');
    const btnTables = document.getElementById('btn-view-tables');
    const erdContainer = document.getElementById('pe-erd-container');
    const treeContainer = document.getElementById('pe-schema-tree');

    btnErd?.addEventListener('click', () => {
      btnErd.classList.add('active');
      btnTables?.classList.remove('active');
      erdContainer?.classList.remove('hidden');
      treeContainer?.classList.add('hidden');
    });

    btnTables?.addEventListener('click', () => {
      btnTables.classList.add('active');
      btnErd?.classList.remove('active');
      treeContainer?.classList.remove('hidden');
      erdContainer?.classList.add('hidden');
    });

    this.renderPEQuestionTabs();
    this.renderPECurrentQuestion();
    this.renderPEERDDiagram();
    this.renderPESchemaInspector();
  }

  private renderPEQuestionTabs() {
    const tabsContainer = document.getElementById('pe-question-tabs');
    if (!tabsContainer || !this.activePEExam) return;

    tabsContainer.innerHTML = '';
    this.activePEExam.questions.forEach((q, idx) => {
      const tab = document.createElement('button');
      tab.className = `pe-qtab ${idx === this.currentPEQIndex ? 'active' : ''}`;
      tab.textContent = `Câu ${q.id}`;
      tab.addEventListener('click', () => {
        this.currentPEQIndex = idx;
        this.renderPEQuestionTabs();
        this.renderPECurrentQuestion();
      });
      tabsContainer.appendChild(tab);
    });
  }

  private renderPECurrentQuestion() {
    if (!this.activePEExam) return;
    const q = this.activePEExam.questions[this.currentPEQIndex];
    if (!q) return;

    const qTag = document.getElementById('pe-q-id');
    const qTitle = document.getElementById('pe-q-title');
    const qDesc = document.getElementById('pe-q-desc');
    const sqlInput = document.getElementById('pe-sql-input') as HTMLTextAreaElement;
    const btnHint = document.getElementById('btn-toggle-hint');

    if (qTag) qTag.textContent = `CÂU HỎI ${q.id} / ${this.activePEExam.questions.length}`;
    if (qTitle) qTitle.textContent = q.title;
    if (qDesc) qDesc.textContent = q.description;

    // Render Expected Sample Output Data Table
    const expectedContainer = document.getElementById('pe-expected-container');
    if (expectedContainer) {
      const expRes = peSimulator.getExpectedResult(q);
      if (expRes.success && expRes.columns.length > 0) {
        const headerHtml = expRes.columns.map(c => `<th>${c}</th>`).join('');
        const rowsHtml = expRes.values.map(row => `
          <tr>
            ${row.map(val => `<td>${val === null ? '<span class="null-val">NULL</span>' : val}</td>`).join('')}
          </tr>
        `).join('');

        expectedContainer.innerHTML = `
          <div class="pe-expected-box">
            <div class="expected-box-header">
              <span class="expected-title">📊 Bảng Kết Quả Mẫu Cần Đạt (Expected Sample Output)</span>
              <span class="expected-count">${expRes.values.length} hàng dữ liệu</span>
            </div>
            <div class="table-responsive">
              <table class="pe-result-table expected-result-table">
                <thead>
                  <tr>${headerHtml}</tr>
                </thead>
                <tbody>
                  ${rowsHtml}
                </tbody>
              </table>
            </div>
          </div>
        `;
      } else {
        expectedContainer.innerHTML = '';
      }
    }

    if (btnHint) {
      const isShowing = this.isHintShowingMap[q.id] || false;
      if (isShowing) {
        btnHint.innerHTML = '🙈 Ẩn Gợi Ý';
        btnHint.classList.add('active-hint');
      } else {
        btnHint.innerHTML = '💡 Gợi Ý Đáp Án';
        btnHint.classList.remove('active-hint');
      }
    }

    if (sqlInput) {
      if (!this.peUserCodeMap[q.id]) {
        this.peUserCodeMap[q.id] = q.initialCode || `-- Câu ${q.id}: Viết câu lệnh SQL của bạn tại đây\nSELECT `;
      }
      sqlInput.value = this.peUserCodeMap[q.id];

      sqlInput.oninput = () => {
        this.peUserCodeMap[q.id] = sqlInput.value;
        if (!this.isHintShowingMap[q.id]) {
          this.peUserDraftMap[q.id] = sqlInput.value;
        }
      };
    }

    // Reset results panel
    const gradeStatus = document.getElementById('pe-grade-status');
    if (gradeStatus) gradeStatus.classList.add('hidden');

    const outputContainer = document.getElementById('pe-output-container');
    if (outputContainer) {
      outputContainer.innerHTML = '<p class="pe-empty-text">Nhấn "▶️ Chạy Lệnh" hoặc "✅ Nộp Bài" để xem kết quả thực thi.</p>';
    }

    const execTime = document.getElementById('pe-exec-time');
    if (execTime) execTime.textContent = '0 rows • 0ms';
  }

  private togglePEHint() {
    if (!this.activePEExam) return;
    const q = this.activePEExam.questions[this.currentPEQIndex];
    const sqlInput = document.getElementById('pe-sql-input') as HTMLTextAreaElement;
    const btnHint = document.getElementById('btn-toggle-hint');
    if (!q || !sqlInput || !btnHint) return;

    const isShowing = this.isHintShowingMap[q.id] || false;

    if (!isShowing) {
      // Toggling ON: Save current user draft code
      this.peUserDraftMap[q.id] = sqlInput.value;
      this.isHintShowingMap[q.id] = true;

      sqlInput.value = `-- 💡 GỢI Ý ĐÁP ÁN CÂU ${q.id}:\n${q.solutionSQL}`;
      btnHint.innerHTML = '🙈 Ẩn Gợi Ý';
      btnHint.classList.add('active-hint');
    } else {
      // Toggling OFF: Restore user draft code
      this.isHintShowingMap[q.id] = false;
      const restoredCode = this.peUserDraftMap[q.id] !== undefined 
        ? this.peUserDraftMap[q.id] 
        : (q.initialCode || `-- Câu ${q.id}: Viết câu lệnh SQL của bạn tại đây\nSELECT `);

      sqlInput.value = restoredCode;
      this.peUserCodeMap[q.id] = restoredCode;

      btnHint.innerHTML = '💡 Gợi Ý Đáp Án';
      btnHint.classList.remove('active-hint');
    }
  }

  private renderPEERDDiagram() {
    const erdContainer = document.getElementById('pe-erd-container');
    if (!erdContainer || !this.activePEExam) return;

    if (this.activePEExam.erdDiagramHtml) {
      erdContainer.innerHTML = this.activePEExam.erdDiagramHtml;

      const btnZoom = erdContainer.querySelector('#btn-zoom-erd');
      const modal = document.getElementById('erd-modal');
      const modalBody = document.getElementById('erd-modal-body');
      const btnCloseModal = document.getElementById('btn-close-erd-modal');

      btnZoom?.addEventListener('click', () => {
        if (modal && modalBody && this.activePEExam?.erdDiagramHtml) {
          modalBody.innerHTML = this.activePEExam.erdDiagramHtml;
          // Hide zoom button inside modal
          const modalZoomBtn = modalBody.querySelector('#btn-zoom-erd');
          if (modalZoomBtn) (modalZoomBtn as HTMLElement).style.display = 'none';

          modal.classList.remove('hidden');
        }
      });

      btnCloseModal?.addEventListener('click', () => {
        modal?.classList.add('hidden');
      });

      modal?.addEventListener('click', (e) => {
        if (e.target === modal) {
          modal.classList.add('hidden');
        }
      });
    } else {
      erdContainer.innerHTML = `
        <div class="pe-empty-text" style="padding: 1.5rem; text-anchor: middle; text-align: center;">
          <p>🖼️ Đang cập nhật sơ đồ ERD cho bộ đề này...</p>
          <small>Vui lòng chuyển sang tab <strong>📋 Danh Sách Bảng</strong> để xem cấu trúc chi tiết.</small>
        </div>
      `;
    }
  }

  private renderPESchemaInspector() {
    const treeContainer = document.getElementById('pe-schema-tree');
    if (!treeContainer || !this.activePEExam) return;

    const pe = this.activePEExam;
    if (pe.schemaDetails && pe.schemaDetails.length > 0) {
      treeContainer.innerHTML = pe.schemaDetails.map(tbl => `
        <div class="schema-table-card">
          <div class="schema-table-header">
            <span class="table-icon">📋</span>
            <span class="table-name-title">${tbl.tableName}</span>
            <span class="table-col-count">${tbl.columns.length} cột</span>
          </div>
          ${tbl.description ? `<div class="table-desc-text">${tbl.description}</div>` : ''}
          <div class="schema-col-list">
            ${tbl.columns.map(col => {
              let badgeHtml = '';
              if (col.isPk) {
                badgeHtml = '<span class="pk-badge">🔑 PK</span>';
              } else if (col.isFk) {
                badgeHtml = `<span class="fk-badge" title="Nối đến ${col.fkRef}">🔗 FK</span>`;
              } else {
                badgeHtml = '<span class="col-dot">•</span>';
              }

              return `
                <div class="schema-col-row">
                  <div class="col-left">
                    ${badgeHtml}
                    <span class="col-name ${col.isPk ? 'is-pk' : col.isFk ? 'is-fk' : ''}">${col.name}</span>
                  </div>
                  <div class="col-right">
                    <span class="col-type-pill">${col.type}</span>
                  </div>
                </div>
              `;
            }).join('')}
          </div>
        </div>
      `).join('');
    } else {
      const schema = peSimulator.getSchemaOverview();
      if (schema.length === 0) {
        treeContainer.innerHTML = '<p class="pe-empty-text">Đang tải cấu trúc CSDL...</p>';
        return;
      }

      treeContainer.innerHTML = schema.map(tbl => `
        <div class="schema-table-card">
          <div class="schema-table-header">
            <span class="table-icon">📋</span>
            <span class="table-name-title">${tbl.tableName}</span>
            <span class="table-col-count">${tbl.columns.length} cột</span>
          </div>
          <div class="schema-col-list">
            ${tbl.columns.map(col => `
              <div class="schema-col-row">
                <span class="col-dot">•</span>
                <span class="col-name">${col}</span>
              </div>
            `).join('')}
          </div>
        </div>
      `).join('');
    }
  }

  private runCurrentSQL() {
    const sqlInput = document.getElementById('pe-sql-input') as HTMLTextAreaElement;
    if (!sqlInput || !sqlInput.value.trim()) return;

    const sql = sqlInput.value.trim();
    const result = peSimulator.executeSQL(sql);

    this.renderPEExecutionOutput(result);
  }

  private submitCurrentPE() {
    if (!this.activePEExam) return;
    const q = this.activePEExam.questions[this.currentPEQIndex];
    const sqlInput = document.getElementById('pe-sql-input') as HTMLTextAreaElement;
    if (!q || !sqlInput) return;

    const userSQL = sqlInput.value.trim();
    const gradeRes = peSimulator.gradeQuestion(q, userSQL);

    const gradeStatus = document.getElementById('pe-grade-status');
    if (gradeStatus) {
      gradeStatus.classList.remove('hidden');
      gradeStatus.className = `pe-grade-status ${gradeRes.passed ? 'passed' : 'failed'}`;
      gradeStatus.innerHTML = `
        <div class="grade-badge-title">${gradeRes.passed ? '🏆 PASSED (ĐÃ ĐẠT)' : '❌ FAILED (CHƯA ĐẠT)'}</div>
        <div class="grade-badge-desc">${gradeRes.message}</div>
      `;
    }

    if (gradeRes.userResult) {
      this.renderPEExecutionOutput(gradeRes.userResult);
    }
  }

  private renderPEExecutionOutput(result: any) {
    const outputContainer = document.getElementById('pe-output-container');
    const execTime = document.getElementById('pe-exec-time');
    if (!outputContainer) return;

    if (execTime) {
      execTime.textContent = `${result.values ? result.values.length : 0} rows • ${result.timeMs || 0}ms`;
    }

    if (!result.success) {
      outputContainer.innerHTML = `
        <div class="sql-error-box">
          <strong>Lỗi thực thi SQL:</strong>
          <pre>${result.error}</pre>
        </div>
      `;
      return;
    }

    if (!result.columns || result.columns.length === 0) {
      outputContainer.innerHTML = `
        <div class="sql-success-box">
          <p>✅ Thực thi lệnh SQL thành công! (Dữ liệu đã được cập nhật)</p>
        </div>
      `;
      return;
    }

    const headerHtml = result.columns.map((c: string) => `<th>${c}</th>`).join('');
    const rowsHtml = result.values.map((row: any[]) => `
      <tr>
        ${row.map(val => `<td>${val === null ? '<span class="null-val">NULL</span>' : val}</td>`).join('')}
      </tr>
    `).join('');

    outputContainer.innerHTML = `
      <div class="table-responsive">
        <table class="pe-result-table">
          <thead>
            <tr>${headerHtml}</tr>
          </thead>
          <tbody>
            ${rowsHtml}
          </tbody>
        </table>
      </div>
    `;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new AppRouter();
});
