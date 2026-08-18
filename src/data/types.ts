export interface Question {
  id: number;
  question: string;
  options: string[];
  answer: number; // 0 for A, 1 for B, 2 for C, 3 for D
  explanation?: string;
  codeSnippet?: string;
  image?: string;
}

export interface Subject {
  id: string;
  code: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  badgeClass: string;
  themeColor: string;
  gradient: string;
  totalQuestions: number;
  questions: Question[];
}
