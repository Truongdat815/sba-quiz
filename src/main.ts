import { QUESTIONS, Question } from './data/questions';

class QuizApp {
  private userAnswers: Record<number, number> = {};
  private filterMode: 'all' | 'wrong_only' = 'all';
  private lastWrongQuestionIds: number[] = [];
  private pendingRetryQueue: number[] = [];
  private currentIndex: number = 0;

  constructor() {
    this.loadState();
    this.initEventListeners();
    this.initKeyboardListeners();
    this.render();
  }

  private loadState() {
    try {
      const savedAnswers = localStorage.getItem('sba301_answers');
      if (savedAnswers) this.userAnswers = JSON.parse(savedAnswers);

      const savedWrong = localStorage.getItem('sba301_wrong_ids');
      if (savedWrong) this.lastWrongQuestionIds = JSON.parse(savedWrong);

      const savedIndex = localStorage.getItem('sba301_current_index');
      if (savedIndex) this.currentIndex = parseInt(savedIndex, 10) || 0;

      const savedQueue = localStorage.getItem('sba301_retry_queue');
      if (savedQueue) this.pendingRetryQueue = JSON.parse(savedQueue);
    } catch (e) {
      console.error("Failed to load state:", e);
    }
  }

  private saveState() {
    try {
      localStorage.setItem('sba301_answers', JSON.stringify(this.userAnswers));
      localStorage.setItem('sba301_wrong_ids', JSON.stringify(this.lastWrongQuestionIds));
      localStorage.setItem('sba301_current_index', this.currentIndex.toString());
      localStorage.setItem('sba301_retry_queue', JSON.stringify(this.pendingRetryQueue));
    } catch (e) {
      console.error("Failed to save state:", e);
    }
  }

  private initEventListeners() {
    document.getElementById('btn-reset-all')?.addEventListener('click', () => this.resetAll());
    
    const retryWrongBtn = document.getElementById('btn-retry-wrong');
    retryWrongBtn?.addEventListener('click', () => this.retryWrong());

    document.getElementById('btn-show-all-mode')?.addEventListener('click', () => {
      this.filterMode = 'all';
      this.currentIndex = 0;
      this.render();
    });

    document.getElementById('btn-prev')?.addEventListener('click', () => this.prevQuestion());
    document.getElementById('btn-next')?.addEventListener('click', () => this.nextQuestion());
  }

  private initKeyboardListeners() {
    window.addEventListener('keydown', (e: KeyboardEvent) => {
      if (['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement)?.tagName)) {
        return;
      }

      const activeQuestions = this.getActiveQuestions();
      if (activeQuestions.length === 0) return;

      switch (e.key) {
        case 'ArrowLeft':
        case 'a':
        case 'A':
          if (e.key === 'ArrowLeft') {
            e.preventDefault();
            this.prevQuestion();
          } else if (e.key === 'a' || e.key === 'A') {
            this.selectAnswerForCurrent(0);
          }
          break;

        case 'ArrowRight':
          e.preventDefault();
          this.nextQuestion();
          break;

        case '1':
        case 'Numpad1':
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

  private getActiveQuestions(): Question[] {
    if (this.filterMode === 'wrong_only' && this.lastWrongQuestionIds.length > 0) {
      return QUESTIONS.filter(q => this.lastWrongQuestionIds.includes(q.id));
    }
    return QUESTIONS;
  }

  private nextQuestion() {
    const activeQuestions = this.getActiveQuestions();

    if (this.pendingRetryQueue && this.pendingRetryQueue.length > 0) {
      const nextWrongId = this.pendingRetryQueue.find(
        id => this.userAnswers[id] === undefined
      );

      if (nextWrongId !== undefined) {
        const nextIdx = activeQuestions.findIndex(q => q.id === nextWrongId);
        if (nextIdx !== -1 && nextIdx !== this.currentIndex) {
          this.currentIndex = nextIdx;
          this.saveState();
          this.render();
          return;
        }
      }
    }

    if (this.currentIndex < activeQuestions.length - 1) {
      this.currentIndex++;
      this.saveState();
      this.render();
    }
  }

  private prevQuestion() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.saveState();
      this.render();
    }
  }

  private selectAnswerForCurrent(optionIndex: number) {
    const activeQuestions = this.getActiveQuestions();
    if (this.currentIndex >= activeQuestions.length) return;
    const q = activeQuestions[this.currentIndex];
    this.selectAnswer(q.id, optionIndex);
  }

  private selectAnswer(questionId: number, optionIndex: number) {
    if (this.userAnswers[questionId] !== undefined) {
      return;
    }

    this.userAnswers[questionId] = optionIndex;
    this.updateWrongQuestionsList();
    this.saveState();
    this.render();
  }

  private updateWrongQuestionsList() {
    const wrongIds: number[] = [];
    Object.entries(this.userAnswers).forEach(([qIdStr, selectedOpt]) => {
      const qId = parseInt(qIdStr, 10);
      const q = QUESTIONS.find(item => item.id === qId);
      if (q && selectedOpt !== q.answer) {
        wrongIds.push(qId);
      }
    });
    this.lastWrongQuestionIds = wrongIds;
  }

  private resetAll() {
    this.userAnswers = {};
    this.filterMode = 'all';
    this.lastWrongQuestionIds = [];
    this.pendingRetryQueue = [];
    this.currentIndex = 0;
    this.saveState();
    this.render();
  }

  private retryWrong() {
    const wrongIds = QUESTIONS.filter(q => {
      const ans = this.userAnswers[q.id];
      return ans !== undefined && ans !== q.answer;
    }).map(q => q.id);

    if (wrongIds.length === 0) return;

    wrongIds.forEach(id => {
      delete this.userAnswers[id];
    });

    this.pendingRetryQueue = [...wrongIds];
    this.filterMode = 'all';

    const firstWrongId = wrongIds[0];
    const targetIdx = QUESTIONS.findIndex(q => q.id === firstWrongId);
    if (targetIdx !== -1) {
      this.currentIndex = targetIdx;
    }

    this.updateWrongQuestionsList();
    this.saveState();
    this.render();
  }

  private updateStats() {
    const answeredCount = Object.keys(this.userAnswers).length;
    let correctCount = 0;
    let wrongCount = 0;

    Object.entries(this.userAnswers).forEach(([qIdStr, selectedOpt]) => {
      const qId = parseInt(qIdStr, 10);
      const q = QUESTIONS.find(item => item.id === qId);
      if (q) {
        if (selectedOpt === q.answer) {
          correctCount++;
        } else {
          wrongCount++;
        }
      }
    });

    const progressEl = document.getElementById('progress-text');
    if (progressEl) {
      progressEl.textContent = `${answeredCount} / ${QUESTIONS.length}`;
    }

    const activeWrongCount = QUESTIONS.filter(q => {
      const ans = this.userAnswers[q.id];
      return ans !== undefined && ans !== q.answer;
    }).length;

    const wrongRetryBtn = document.getElementById('btn-retry-wrong') as HTMLButtonElement;
    if (wrongRetryBtn) {
      wrongRetryBtn.disabled = activeWrongCount === 0;
      wrongRetryBtn.innerHTML = `<span class="icon">🎯</span> Làm Lại Các Câu Sai (${activeWrongCount})`;
    }

    const modeBadge = document.getElementById('mode-badge');
    if (modeBadge) {
      modeBadge.textContent = `Đúng: ${correctCount} | Sai: ${activeWrongCount}`;
    }
  }

  private render() {
    const activeQuestions = this.getActiveQuestions();
    
    if (this.currentIndex >= activeQuestions.length) {
      this.currentIndex = Math.max(0, activeQuestions.length - 1);
    }

    this.updateStats();
    this.renderSidebar();
    this.renderFilterNotice();
    this.renderSingleQuestion();
    this.updateNavButtons();
  }

  private renderSidebar() {
    const gridEl = document.getElementById('question-grid');
    if (!gridEl) return;

    gridEl.innerHTML = '';
    const activeQuestions = this.getActiveQuestions();
    let activeBtnElement: HTMLElement | null = null;

    activeQuestions.forEach((q, idx) => {
      const btn = document.createElement('button');
      btn.className = 'grid-btn';
      btn.textContent = q.id.toString();

      const selected = this.userAnswers[q.id];

      if (selected !== undefined) {
        if (selected === q.answer) {
          btn.classList.add('correct');
        } else {
          btn.classList.add('wrong');
        }
      }

      if (idx === this.currentIndex) {
        btn.classList.add('current-active');
        activeBtnElement = btn;
      }

      btn.addEventListener('click', () => {
        this.currentIndex = idx;
        this.saveState();
        this.render();
      });

      gridEl.appendChild(btn);
    });

    // Reliably scroll the sidebar grid container to bring active button into view
    if (activeBtnElement) {
      setTimeout(() => {
        activeBtnElement?.scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
          inline: 'nearest'
        });
      }, 50);
    }
  }

  private renderFilterNotice() {
    const filterNotice = document.getElementById('filter-notice');
    const wrongCountText = document.getElementById('wrong-count-text');

    if (this.filterMode === 'wrong_only') {
      filterNotice?.classList.remove('hidden');
      if (wrongCountText) wrongCountText.textContent = this.getActiveQuestions().length.toString();
    } else {
      filterNotice?.classList.add('hidden');
    }
  }

  private updateNavButtons() {
    const activeQuestions = this.getActiveQuestions();
    const prevBtn = document.getElementById('btn-prev') as HTMLButtonElement;
    const nextBtn = document.getElementById('btn-next') as HTMLButtonElement;
    const curIndicator = document.getElementById('question-counter-indicator');

    if (prevBtn) prevBtn.disabled = this.currentIndex <= 0;
    if (nextBtn) nextBtn.disabled = this.currentIndex >= activeQuestions.length - 1;

    if (curIndicator) {
      curIndicator.textContent = `Câu ${this.currentIndex + 1} / ${activeQuestions.length}`;
    }
  }

  private renderSingleQuestion() {
    const container = document.getElementById('questions-container');
    if (!container) return;

    container.innerHTML = '';
    const activeQuestions = this.getActiveQuestions();

    if (activeQuestions.length === 0) {
      container.innerHTML = `
        <div class="empty-state">
          🎉 Bạn không có câu sai nào! Tất cả đều chính xác.
        </div>
      `;
      return;
    }

    const q = activeQuestions[this.currentIndex];
    const card = this.createQuestionCard(q);
    container.appendChild(card);
  }

  private createQuestionCard(q: Question): HTMLElement {
    const card = document.createElement('div');
    card.className = 'question-card single-page-card';

    const selectedOption = this.userAnswers[q.id];
    const isAnswered = selectedOption !== undefined;
    const isCorrect = isAnswered && selectedOption === q.answer;

    // Header
    const qHeader = document.createElement('div');
    qHeader.className = 'q-header';

    const qNum = document.createElement('div');
    qNum.className = 'q-number';
    qNum.textContent = `Câu ${q.id}`;

    qHeader.appendChild(qNum);

    if (isAnswered) {
      const statusBadge = document.createElement('span');
      if (isCorrect) {
        statusBadge.className = 'badge-status badge-correct';
        statusBadge.textContent = '✓ Đúng';
      } else {
        statusBadge.className = 'badge-status badge-wrong';
        statusBadge.textContent = '✕ Chưa đúng';
      }
      qHeader.appendChild(statusBadge);
    }

    const qTitle = document.createElement('div');
    qTitle.className = 'q-title';
    qTitle.textContent = q.question;

    qHeader.appendChild(qTitle);
    card.appendChild(qHeader);

    // Options (A, B, C, D fixed order)
    const optionsList = document.createElement('div');
    optionsList.className = 'options-list';

    const prefixes = ['A', 'B', 'C', 'D'];
    const keyShortcuts = ['[1]', '[2]', '[3]', '[4]'];

    q.options.forEach((optText, idx) => {
      const optBtn = document.createElement('button');
      optBtn.className = 'option-btn';

      const prefixSpan = document.createElement('span');
      prefixSpan.className = 'opt-prefix';
      prefixSpan.textContent = prefixes[idx];

      const textSpan = document.createElement('span');
      textSpan.className = 'opt-text';
      textSpan.textContent = optText;

      const keyHint = document.createElement('span');
      keyHint.className = 'opt-key-hint';
      keyHint.textContent = keyShortcuts[idx];

      optBtn.appendChild(prefixSpan);
      optBtn.appendChild(textSpan);
      optBtn.appendChild(keyHint);

      // Instant Feedback Styling & Locking
      if (isAnswered) {
        optBtn.classList.add('disabled');
        optBtn.disabled = true;

        if (idx === q.answer) {
          optBtn.classList.add('is-correct');
          const checkIcon = document.createElement('span');
          checkIcon.className = 'opt-icon opt-icon-check';
          checkIcon.textContent = '✓';
          optBtn.appendChild(checkIcon);
        } else if (selectedOption === idx) {
          optBtn.classList.add('is-wrong');
          const crossIcon = document.createElement('span');
          crossIcon.className = 'opt-icon opt-icon-cross';
          crossIcon.textContent = '✕';
          optBtn.appendChild(crossIcon);
        }
      } else {
        optBtn.addEventListener('click', () => {
          this.selectAnswer(q.id, idx);
        });
      }

      optionsList.appendChild(optBtn);
    });

    card.appendChild(optionsList);

    // Feedback message box & Explanation
    if (isAnswered) {
      const feedbackMsg = document.createElement('div');
      feedbackMsg.className = isCorrect ? 'feedback-box feedback-correct' : 'feedback-box feedback-wrong';
      feedbackMsg.textContent = isCorrect ? 'Chính xác rồi, tiếp tục nhé!' : 'Chưa đúng. Hãy xem đáp án đúng ở trên.';
      card.appendChild(feedbackMsg);

      if (q.explanation) {
        const expBox = document.createElement('div');
        expBox.className = 'explanation-box';

        const expTitle = document.createElement('div');
        expTitle.className = 'explanation-title';
        expTitle.innerHTML = `💡 GIẢI THÍCH (Đáp án đúng: <strong>${prefixes[q.answer]}</strong>)`;

        const expContent = document.createElement('div');
        expContent.textContent = q.explanation;

        expBox.appendChild(expTitle);
        expBox.appendChild(expContent);
        card.appendChild(expBox);
      }
    }

    return card;
  }
}

// Instantiate Quiz Application on DOM load
window.addEventListener('DOMContentLoaded', () => {
  new QuizApp();
});
