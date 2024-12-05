export interface User {
  id: string;
  username: string;
  email: string;
  isPremium: boolean;
  subscription: 'free' | 'premium';
  subscriptionEndDate?: Date;
  createdAt: Date;
}

export interface Question {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  subject: string;
  difficulty: 'easy' | 'medium' | 'hard';
  explanation: string;
  tags: string[];
  studyMaterials: Array<{
    type: string;
    url: string;
  }>;
}

export interface UserProgress {
  userId: string;
  questionsAttempted: Array<{
    questionId: string;
    correct: boolean;
    timestamp: Date;
  }>;
  subjectProgress: Array<{
    subject: string;
    correctCount: number;
    totalCount: number;
  }>;
  weeklyStats: Array<{
    week: Date;
    questionsAttempted: number;
    correctCount: number;
  }>;
}

export interface StudyMaterial {
  id: string;
  title: string;
  type: string;
  url: string;
  subject: string;
  isPremium: boolean;
} 