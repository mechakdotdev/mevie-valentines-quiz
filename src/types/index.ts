export interface Round {
  id: number;
  name: string;
  emoji: string;
  description: string;
  questionCount: number;
}

export interface Question {
  id: number;
  question: string;
  roundId: number;
  images?: string[]; // Array of image paths for stickers
}

export interface Contestant {
  name: string;
  score: number;
}

export interface QuizContextType {
  currentQuestionIndex: number;
  contestants: {
    mechak: Contestant;
    evie: Contestant;
  };
  isQuizComplete: boolean;
  setCurrentQuestionIndex: (index: number) => void;
  updateScore: (contestant: 'mechak' | 'evie', delta: number) => void;
  completeQuiz: () => void;
  resetQuiz: () => void;
}


