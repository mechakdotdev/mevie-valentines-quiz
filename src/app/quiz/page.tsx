'use client';

import React, { useState, useCallback } from 'react';
import { Box, Button, Stack } from '@mui/material';
import { useQuiz } from '@/context/QuizContext';
import { useRouter } from 'next/navigation';
import { Scoreboard } from '@/components/Scoreboard';
import { QuestionCard } from '@/components/QuestionCard';
import { LoadingScreen } from '@/components/LoadingScreen';
import { ResultsPage } from '@/components/ResultsPage';
import { FloatingHearts } from '@/components/FloatingHearts';
import { questions } from '@/data/questions';
import { ArrowForward } from '@mui/icons-material';

export default function QuizPage() {
  const { currentQuestionIndex, setCurrentQuestionIndex, isQuizComplete, completeQuiz, resetQuiz } = useQuiz();
  const router = useRouter();
  const [slideDirection, setSlideDirection] = useState<'left' | 'right'>('right');
  const [showLoading, setShowLoading] = useState(false);

  const isLastQuestion = currentQuestionIndex === questions.length - 1;

  const handleNext = () => {
    if (!isLastQuestion) {
      setSlideDirection('left');
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setShowLoading(true);
      // Complete quiz after 3 seconds (loading + display time)
      setTimeout(() => {
        completeQuiz();
        setShowLoading(false);
      }, 3000);
    }
  };

  if (showLoading) {
    return <LoadingScreen />;
  }

  if (isQuizComplete) {
    const handlePlayAgain = () => {
      resetQuiz();
      router.push('/');
    };
    return <ResultsPage onPlayAgain={handlePlayAgain} />;
  }

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <Box
      sx={{
        minHeight: '100vh',
        py: { xs: 1.5, sm: 2, md: 3 },
        px: { xs: 1.5, sm: 2, md: 3 },
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <FloatingHearts />
      <Box sx={{ position: 'relative', zIndex: 1, width: '100%' }}>
        <Scoreboard />

        <Stack
          spacing={ { xs: 1.5, sm: 2, md: 3 } }
          sx={{
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
          }}
        >
          <QuestionCard
            question={currentQuestion}
            questionNumber={currentQuestionIndex + 1}
            totalQuestions={questions.length}
            slideDirection={slideDirection}
          />

          <Button
            variant="contained"
            color="primary"
            endIcon={<ArrowForward />}
            onClick={handleNext}
            disabled={false}
            sx={{
              borderRadius: '8px',
              fontSize: { xs: '0.9rem', sm: '1rem', md: '1.1rem' },
              px: { xs: 3, sm: 4, md: 5 },
              py: { xs: 1.2, sm: 1.5, md: 1.8 },
              mt: { xs: 1, sm: 2, md: 3 },
            }}
          >
            {isLastQuestion ? 'See Results' : 'Next Question'}
          </Button>
        </Stack>
      </Box>
    </Box>
  );
}

