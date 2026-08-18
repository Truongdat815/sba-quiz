import { Subject, Question } from './data/types';
import { SUBJECTS, getSubjectById } from './data/subjects';

interface SubjectState {
  userAnswers: Record<number, number>;
  lastWrongQuestionIds: number[];
  pendingRetryQueue: number[];
  currentIndex: number;
  filterMode: 'all' | 'wrong_only';
}

class AppRouter {
  private activeSubject: Subject | null = null;
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
      console.error(`Failed to load state for ${subjectId}:`, e);
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
  }

  private initKeyboardListeners() {
    window.addEventListener('keydown', (e: KeyboardEvent) => {
      if (['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement)?.tagName)) {
        return;
      }

      if (!this.activeSubject) return;

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

        default:
          break;
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
        this.showQuizView();
        return;
      }
    }

    // Default: Home View
    this.activeSubject = null;
    this.showHomeView();
  }

  private showHomeView() {
    const homeView = document.getElementById('home-view');
    const quizView = document.getElementById('quiz-view');

    homeView?.classList.remove('hidden');
    quizView?.classList.add('hidden');

    document.title = 'FPTU Quiz Hub - Hệ Thống Ôn Thi Trắc Nghiệm';
    this.renderHomeView();
  }

  private showQuizView() {
    const homeView = document.getElementById('home-view');
    const quizView = document.getElementById('quiz-view');

    homeView?.classList.add('hidden');
    quizView?.classList.remove('hidden');

    if (this.activeSubject) {
      document.title = `${this.activeSubject.code} - ${this.activeSubject.title}`;
    }
    this.renderQuizView();
  }

  /* ==================== HOME VIEW RENDERING ==================== */
  private renderHomeView() {
    const subjectsGrid = document.getElementById('subjects-grid');
    if (!subjectsGrid) return;

    let totalAllQuestions = 0;
    let totalAllCompleted = 0;
    let totalAllCorrect = 0;

    subjectsGrid.innerHTML = '';

    SUBJECTS.forEach(sub => {
      const state = this.subjectStates[sub.id];
      const answeredCount = Object.keys(state.userAnswers).length;
      
      let correctCount = 0;
      let wrongCount = 0;

      sub.questions.forEach(q => {
        const uAns = state.userAnswers[q.id];
        if (uAns !== undefined) {
          if (uAns === q.answer) correctCount++;
          else wrongCount++;
        }
      });

      const pct = sub.totalQuestions > 0 
        ? Math.round((answeredCount / sub.totalQuestions) * 100) 
        : 0;

      totalAllQuestions += sub.totalQuestions;
      totalAllCompleted += answeredCount;
      totalAllCorrect += correctCount;

      const tags = sub.id === 'sba301'
        ? ['#React', '#JSX', '#Hooks', '#Router', '#API']
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

      subjectsGrid.appendChild(card);
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
  }

  /* ==================== QUIZ VIEW LOGIC ==================== */
  private getCurrentState(): SubjectState {
    if (!this.activeSubject) throw new Error("No active subject");
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
    
    // Set or toggle answer
    state.userAnswers[questionId] = optionIndex;

    // Update wrong list
    const q = this.activeSubject.questions.find(item => item.id === questionId);
    if (q) {
      if (optionIndex !== q.answer) {
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

  /* ==================== QUIZ VIEW RENDERING ==================== */
  private renderQuizView() {
    if (!this.activeSubject) return;
    const sub = this.activeSubject;
    const state = this.getCurrentState();

    // Update Header Brand
    const quizBadge = document.getElementById('quiz-subject-badge');
    const quizTitle = document.getElementById('quiz-subject-title');
    const quizSubtitle = document.getElementById('quiz-subject-subtitle');

    if (quizBadge) {
      quizBadge.textContent = `${sub.icon} ${sub.code}`;
      quizBadge.className = `logo-badge ${sub.badgeClass}`;
    }
    if (quizTitle) quizTitle.textContent = sub.title;
    if (quizSubtitle) {
      quizSubtitle.innerHTML = `Mã đề: <span>${sub.code}_EXAM</span> • ${sub.totalQuestions} câu`;
    }

    const activeQuestions = this.getActiveQuestions();
    
    // Bounds check
    if (state.currentIndex >= activeQuestions.length) {
      state.currentIndex = Math.max(0, activeQuestions.length - 1);
    }

    // Stats Calculation
    let correctCount = 0;
    let wrongCount = 0;
    const allQuestions = sub.questions;
    
    allQuestions.forEach(q => {
      const uAns = state.userAnswers[q.id];
      if (uAns !== undefined) {
        if (uAns === q.answer) correctCount++;
        else wrongCount++;
      }
    });

    const answeredCount = Object.keys(state.userAnswers).length;

    // Header Progress Pill
    const progressText = document.getElementById('progress-text');
    if (progressText) {
      progressText.textContent = `${answeredCount} / ${sub.totalQuestions}`;
    }

    // Mode Badge
    const modeBadge = document.getElementById('mode-badge');
    if (modeBadge) {
      modeBadge.textContent = `Đúng: ${correctCount} | Sai: ${wrongCount}`;
    }

    // Retry Wrong Button
    const retryWrongBtn = document.getElementById('btn-retry-wrong') as HTMLButtonElement;
    if (retryWrongBtn) {
      const wrongCountTotal = state.lastWrongQuestionIds.length;
      retryWrongBtn.disabled = wrongCountTotal === 0;
      retryWrongBtn.innerHTML = `<span class="icon">🎯</span> Làm Lại Các Câu Sai (${wrongCountTotal})`;
    }

    // Filter Notice
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

    // Render Question Grid
    this.renderQuestionGrid(activeQuestions);

    // Render Current Question Card
    this.renderQuestionCard(activeQuestions);

    // Pagination buttons & indicators
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
        if (userAnswer === q.answer) {
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

    // Auto-scroll grid to keep active item in view
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
    const isCorrect = isAnswered && userAnswer === q.answer;

    let codeSnippetHtml = '';
    if (q.codeSnippet) {
      codeSnippetHtml = `<pre class="code-snippet-box"><code>${q.codeSnippet}</code></pre>`;
    }

    const optionsHtml = q.options.map((opt, idx) => {
      const letter = ['A', 'B', 'C', 'D'][idx];
      let btnClass = 'option-btn';

      if (isAnswered) {
        if (idx === q.answer) {
          btnClass += ' correct';
        } else if (idx === userAnswer) {
          btnClass += ' wrong';
        }
      }

      return `
        <button class="${btnClass}" data-opt-idx="${idx}">
          <span class="option-indicator">${letter}</span>
          <span class="option-text">${opt}</span>
        </button>
      `;
    }).join('');

    let explanationHtml = '';
    if (isAnswered) {
      const expStatusClass = isCorrect ? 'correct' : 'wrong';
      const expTitle = isCorrect ? '✅ Chính xác!' : '❌ Chưa chính xác!';
      const defaultExp = isCorrect
        ? `Bạn đã chọn đúng phương án ${['A', 'B', 'C', 'D'][q.answer]}.`
        : `Đáp án đúng là ${['A', 'B', 'C', 'D'][q.answer]}: "${q.options[q.answer]}".`;

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
        </div>
        <h2 class="question-title">${q.question}</h2>
        ${codeSnippetHtml}
        <div class="options-grid">
          ${optionsHtml}
        </div>
        ${explanationHtml}
      </div>
    `;

    // Add click listeners to option buttons
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
}

// Initialize Application
document.addEventListener('DOMContentLoaded', () => {
  new AppRouter();
});
