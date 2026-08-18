import { Subject } from './types';
import { SBA301_QUESTIONS } from './sba301';
import { DBI202_QUESTIONS } from './dbi202';

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
    id: 'dbi202',
    code: 'DBI202',
    title: 'Ôn Trắc Nghiệm Database Systems',
    subtitle: 'Đề Thi & Ngân Hàng Câu Hỏi Cơ Sở Dữ Liệu',
    description: 'Bao quát toàn diện: Mô hình dữ liệu quan hệ, Chuẩn hóa (1NF, 2NF, 3NF, BCNF), Phụ thuộc hàm, Đại số quan hệ, SQL Server, View, Procedure, Trigger & ACID Transactions.',
    icon: '🗄️',
    badgeClass: 'badge-db',
    themeColor: '#f59e0b',
    gradient: 'linear-gradient(135deg, #d97706 0%, #f59e0b 50%, #10b981 100%)',
    totalQuestions: DBI202_QUESTIONS.length,
    questions: DBI202_QUESTIONS
  }
];

export function getSubjectById(id: string): Subject | undefined {
  return SUBJECTS.find(s => s.id === id);
}
