import { Subject } from './types';
import { SBA301_QUESTIONS } from './sba301';
import { DBI202_EXAM1_QUESTIONS } from './dbi202_exam1';
import { DBI202_EXAM2_QUESTIONS } from './dbi202_exam2';
import { DBI202_EXAM3_QUESTIONS } from './dbi202_exam3';
import { DBI202_EXAM4_QUESTIONS } from './dbi202_exam4';
import { DBI202_EXAM5_QUESTIONS } from './dbi202_exam5';
import { DBI202_EXAM6_QUESTIONS } from './dbi202_exam6';
import { DBI202_EXAM7_QUESTIONS } from './dbi202_exam7';
import { DBI202_EXAM8_QUESTIONS } from './dbi202_exam8';
import { DBI202_EXAM9_QUESTIONS } from './dbi202_exam9';
import { DBI202_EXAM10_QUESTIONS } from './dbi202_exam10';
import { DBI202_EXAM11_QUESTIONS } from './dbi202_exam11';
import { DBI202_EXAM12_QUESTIONS } from './dbi202_exam12';
import { ALL_DBI202_QUESTIONS } from './dbi202';

export const SUBJECTS: Subject[] = [
{
    id: 'sba301',
    code: 'SBA301',
    title: 'Ôn Trắc Nghiệm ReactJS',
    subtitle: 'React Core, Hooks, State Management & Modern Frontend',
    description: 'Nắm vững kiến thức cốt lõi về React, JSX, Virtual DOM, React Hooks (useState, useEffect, useReducer), React Router, Context API và tối ưu hóa component.',
    icon: '⚛️',
    badgeClass: 'badge-react',
    themeColor: '#38bdf8',
    gradient: 'linear-gradient(135deg, #0284c7 0%, #38bdf8 50%, #818cf8 100%)',
    totalQuestions: SBA301_QUESTIONS.length,
    questions: SBA301_QUESTIONS
  },
  {
    id: 'dbi202_exam1',
    code: 'DBI202_SP26_FE_601742',
    title: 'DBI202 - SP26 FE (Mã 601742)',
    subtitle: '50 Câu Trắc Nghiệm CSDL - Đề 1 (Screenshot 476 - 525)',
    description: 'Đề thi trắc nghiệm Database Systems kỳ SP26 FE mã đề 601742.',
    icon: '🗄️',
    badgeClass: 'badge-db',
    themeColor: '#f59e0b',
    gradient: 'linear-gradient(135deg, #d97706 0%, #f59e0b 50%, #10b981 100%)',
    totalQuestions: DBI202_EXAM1_QUESTIONS.length,
    questions: DBI202_EXAM1_QUESTIONS
  },
  {
    id: 'dbi202_exam2',
    code: 'DBI202_SP26_RE',
    title: 'DBI202 - SP26 RE (Đề Resit)',
    subtitle: '50 Câu Trắc Nghiệm CSDL - Đề 2 (Screenshot 526 - 575)',
    description: 'Đề thi trắc nghiệm Database Systems kỳ SP26 RE.',
    icon: '🗃️',
    badgeClass: 'badge-db',
    themeColor: '#ec4899',
    gradient: 'linear-gradient(135deg, #be185d 0%, #ec4899 50%, #f59e0b 100%)',
    totalQuestions: DBI202_EXAM2_QUESTIONS.length,
    questions: DBI202_EXAM2_QUESTIONS
  },
  {
    id: 'dbi202_exam3',
    code: 'DBI202_SP26_FE',
    title: 'DBI202 - SP26 FE (Đề Final)',
    subtitle: '50 Câu Trắc Nghiệm CSDL - Đề 3 (Screenshot 576 - 625)',
    description: 'Đề thi trắc nghiệm Database Systems kỳ SP26 FE.',
    icon: '📊',
    badgeClass: 'badge-db',
    themeColor: '#10b981',
    gradient: 'linear-gradient(135deg, #059669 0%, #10b981 50%, #3b82f6 100%)',
    totalQuestions: DBI202_EXAM3_QUESTIONS.length,
    questions: DBI202_EXAM3_QUESTIONS
  },
  {
    id: 'dbi202_exam4',
    code: 'DBI202_FA25_FE',
    title: 'DBI202 - FA25 FE (Đề Final FA25)',
    subtitle: '50 Câu Trắc Nghiệm CSDL - Đề 4 (Screenshot 626 - 675)',
    description: 'Đề thi trắc nghiệm Database Systems kỳ FA25 FE.',
    icon: '📁',
    badgeClass: 'badge-db',
    themeColor: '#6366f1',
    gradient: 'linear-gradient(135deg, #4338ca 0%, #6366f1 50%, #a855f7 100%)',
    totalQuestions: DBI202_EXAM4_QUESTIONS.length,
    questions: DBI202_EXAM4_QUESTIONS
  },
  {
    id: 'dbi202_exam5',
    code: 'DBI202_FA25_FEB5',
    title: 'DBI202 - FA25 FE B5 (Đề FE B5)',
    subtitle: '50 Câu Trắc Nghiệm CSDL - Đề 5 (Screenshot 676 - 727)',
    description: 'Đề thi trắc nghiệm Database Systems kỳ FA25 FE B5.',
    icon: '📑',
    badgeClass: 'badge-db',
    themeColor: '#06b6d4',
    gradient: 'linear-gradient(135deg, #0891b2 0%, #06b6d4 50%, #3b82f6 100%)',
    totalQuestions: DBI202_EXAM5_QUESTIONS.length,
    questions: DBI202_EXAM5_QUESTIONS
  },
  {
    id: 'dbi202_exam6',
    code: 'DBI202_FA25_RE',
    title: 'DBI202 - FA25 RE (Đề Resit FA25)',
    subtitle: '50 Câu Trắc Nghiệm CSDL - Đề 6 (Screenshot 728 - 777)',
    description: 'Đề thi trắc nghiệm Database Systems kỳ FA25 RE.',
    icon: '📌',
    badgeClass: 'badge-db',
    themeColor: '#f43f5e',
    gradient: 'linear-gradient(135deg, #e11d48 0%, #f43f5e 50%, #f59e0b 100%)',
    totalQuestions: DBI202_EXAM6_QUESTIONS.length,
    questions: DBI202_EXAM6_QUESTIONS
  },
  {
    id: 'dbi202_exam7',
    code: 'DBI202_FA25_REB5',
    title: 'DBI202 - FA25 RE B5 (Đề RE B5)',
    subtitle: '52 Câu Trắc Nghiệm CSDL - Đề 7 (Screenshot 778 - 829)',
    description: 'Đề thi trắc nghiệm Database Systems kỳ FA25 RE B5.',
    icon: '🎯',
    badgeClass: 'badge-db',
    themeColor: '#a855f7',
    gradient: 'linear-gradient(135deg, #7e22ce 0%, #a855f7 50%, #ec4899 100%)',
    totalQuestions: DBI202_EXAM7_QUESTIONS.length,
    questions: DBI202_EXAM7_QUESTIONS
  },
  {
    id: 'dbi202_exam8',
    code: 'DBI202_EXAM8',
    title: 'DBI202 - Bộ Đề Mới 8',
    subtitle: '50 Câu Trắc Nghiệm CSDL Mới - Đề 8',
    description: '50 câu hỏi trắc nghiệm CSDL mới bóc tách từ ngân hàng 483 câu.',
    icon: '💡',
    badgeClass: 'badge-db',
    themeColor: '#3b82f6',
    gradient: 'linear-gradient(135deg, #1d4ed8 0%, #3b82f6 50%, #06b6d4 100%)',
    totalQuestions: DBI202_EXAM8_QUESTIONS.length,
    questions: DBI202_EXAM8_QUESTIONS
  },
  {
    id: 'dbi202_exam9',
    code: 'DBI202_EXAM9',
    title: 'DBI202 - Bộ Đề Mới 9',
    subtitle: '50 Câu Trắc Nghiệm CSDL Mới - Đề 9',
    description: '50 câu hỏi trắc nghiệm CSDL mới bóc tách từ ngân hàng 483 câu.',
    icon: '🔥',
    badgeClass: 'badge-db',
    themeColor: '#ef4444',
    gradient: 'linear-gradient(135deg, #b91c1c 0%, #ef4444 50%, #f59e0b 100%)',
    totalQuestions: DBI202_EXAM9_QUESTIONS.length,
    questions: DBI202_EXAM9_QUESTIONS
  },
  {
    id: 'dbi202_exam10',
    code: 'DBI202_EXAM10',
    title: 'DBI202 - Bộ Đề Mới 10',
    subtitle: '50 Câu Trắc Nghiệm CSDL Mới - Đề 10',
    description: '50 câu hỏi trắc nghiệm CSDL mới bóc tách từ ngân hàng 483 câu.',
    icon: '⚡',
    badgeClass: 'badge-db',
    themeColor: '#8b5cf6',
    gradient: 'linear-gradient(135deg, #6d28d9 0%, #8b5cf6 50%, #ec4899 100%)',
    totalQuestions: DBI202_EXAM10_QUESTIONS.length,
    questions: DBI202_EXAM10_QUESTIONS
  },
  {
    id: 'dbi202_exam11',
    code: 'DBI202_EXAM11',
    title: 'DBI202 - Bộ Đề Mới 11',
    subtitle: '50 Câu Trắc Nghiệm CSDL Mới - Đề 11',
    description: '50 câu hỏi trắc nghiệm CSDL mới bóc tách từ ngân hàng 483 câu.',
    icon: '💎',
    badgeClass: 'badge-db',
    themeColor: '#10b981',
    gradient: 'linear-gradient(135deg, #047857 0%, #10b981 50%, #3b82f6 100%)',
    totalQuestions: DBI202_EXAM11_QUESTIONS.length,
    questions: DBI202_EXAM11_QUESTIONS
  },
  {
    id: 'dbi202_exam12',
    code: 'DBI202_EXAM12',
    title: 'DBI202 - Bộ Đề Mới 12',
    subtitle: '50 Câu Trắc Nghiệm CSDL Mới - Đề 12',
    description: '50 câu hỏi trắc nghiệm CSDL mới (33 câu mới + 17 câu tổng hợp).',
    icon: '🚀',
    badgeClass: 'badge-db',
    themeColor: '#f59e0b',
    gradient: 'linear-gradient(135deg, #b45309 0%, #f59e0b 50%, #ef4444 100%)',
    totalQuestions: DBI202_EXAM12_QUESTIONS.length,
    questions: DBI202_EXAM12_QUESTIONS
  },
  {
    id: 'dbi202_all',
    code: 'DBI202_ALL',
    title: 'DBI202 - Ngân Hàng Câu Hỏi (497 Câu Không Trùng Lặp)',
    subtitle: 'Tổng Hợp Trọn Bộ 497 Câu Hỏi Đã Lọc Trùng Từ 12 Đề Thi',
    description: 'Tổng hợp 497 câu hỏi trắc nghiệm ĐÃ LỌC BỎ TRÙNG LẶP từ tất cả các đề thi và ngân hàng câu hỏi CSDL.',
    icon: '📚',
    badgeClass: 'badge-db',
    themeColor: '#8b5cf6',
    gradient: 'linear-gradient(135deg, #6d28d9 0%, #8b5cf6 50%, #ec4899 100%)',
    totalQuestions: ALL_DBI202_QUESTIONS.length,
    questions: ALL_DBI202_QUESTIONS
  }
];

export function getSubjectById(id: string): Subject | undefined {
  return SUBJECTS.find(s => s.id === id);
}
