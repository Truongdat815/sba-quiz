export interface Question {
  id: number;
  question: string;
  options: string[];
  answer: number | number[]; // number for single choice (0=A, 1=B, etc.) or number[] for multiple choices (e.g. [0, 2] for A&C)
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
