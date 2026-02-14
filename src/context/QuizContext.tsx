'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';
import { QuizContextType } from '@/types';

const QuizContext = createContext<QuizContextType | undefined>(undefined);

export const QuizProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [isQuizComplete, setIsQuizComplete] = useState(false);
  const [contestants, setContestants] = useState({
    mechak: { name: 'Mechak', score: 0 },
    evie: { name: 'Evie', score: 0 },
  });

  const updateScore = (contestant: 'mechak' | 'evie', delta: number) => {
    setContestants((prev) => ({
      ...prev,
      [contestant]: {
        ...prev[contestant],
        score: Math.max(0, prev[contestant].score + delta),
      },
    }));
  };

  const completeQuiz = () => {
    setIsQuizComplete(true);
  };

  const resetQuiz = () => {
    setCurrentQuestionIndex(0);
    setIsQuizComplete(false);
    setContestants({
      mechak: { name: 'Mechak', score: 0 },
      evie: { name: 'Evie', score: 0 },
    });
  };

  return (
    <QuizContext.Provider
      value={{
        currentQuestionIndex,
        contestants,
        isQuizComplete,
        setCurrentQuestionIndex,
        updateScore,
        completeQuiz,
        resetQuiz,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};

export const useQuiz = () => {
  const context = useContext(QuizContext);
  if (!context) {
    throw new Error('useQuiz must be used within QuizProvider');
  }
  return context;
};


