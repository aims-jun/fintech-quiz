export interface Quiz {
  id: number;
  question: string;
  answer: boolean; // true = O, false = X
  explanation?: string;
}

export interface QuizSet {
  type: string;
  label: string;
  quizzes: Quiz[];
}

