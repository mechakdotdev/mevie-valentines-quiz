'use client';

import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import { motion } from 'framer-motion';
import { Question } from '@/types';
import { getRoundForQuestion } from '@/data/questions';
import { CountdownTimer } from './CountdownTimer';

interface QuestionCardProps {
  question: Question;
  questionNumber: number;
  totalQuestions: number;
  slideDirection: 'left' | 'right';
}

export const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  questionNumber,
  totalQuestions,
  slideDirection,
}) => {
  const round = getRoundForQuestion(question);

  const slideVariants = {
    enter: (direction: string) => ({
      x: direction === 'left' ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: string) => ({
      zIndex: 0,
      x: direction === 'left' ? -1000 : 1000,
      opacity: 0,
    }),
  };

  // Positions for images: further out to avoid overlap
  const imagePositions = [
    { top: -30, left: -30, rotate: -12 },
    { top: -25, right: -35, rotate: 8 },
    { bottom: -25, right: -30, rotate: -8 },
  ];

  // Jiggle animation that repeats every 3 seconds
  const jiggleVariants = {
    animate: {
      x: [0, 4, -4, 2, -2, 0],
      y: [0, -4, 2, -2, 3, 0],
      transition: {
        duration: 0.6,
        delay: Math.random() * 3,
        repeat: Infinity,
        repeatDelay: 2.4,
      },
    },
  };

  return (
    <motion.div
      key={question.id}
      custom={slideDirection}
      variants={slideVariants}
      initial="enter"
      animate="center"
      exit="exit"
      transition={{ duration: 0.5 }}
      style={{ position: 'relative' }}
    >
      {/* Countdown Timer - 12 seconds */}
      <CountdownTimer initialSeconds={12} key={question.id} />

      <Card
        sx={{
          maxWidth: { xs: '90%', sm: '85%', md: 900, lg: 1000 },
          width: '100%',
          mx: 'auto',
          boxShadow: '0 12px 32px rgba(220, 20, 60, 0.2)',
          border: { xs: '2px solid #dc143c', sm: '3px solid #dc143c' },
          position: 'relative',
          overflow: 'visible',
        }}
      >
        <CardContent sx={{ 
          p: { xs: 4, sm: 6, md: 8 },
        }}>
          <Box sx={{ mb: { xs: 3, sm: 4, md: 5 }, textAlign: 'center' }}>
            <Typography 
              variant="caption" 
              sx={{ 
                color: '#8b0000', 
                fontWeight: 600, 
                fontSize: { xs: '0.85rem', sm: '1rem', md: '1.1rem' }
              }}
            >
              {round && `${round.emoji} ${round.name} • `}Question {questionNumber} of {totalQuestions}
            </Typography>
            <Box
              sx={{
                width: '100%',
                height: { xs: '5px', sm: '6px', md: '8px' },
                backgroundColor: '#f0f0f0',
                borderRadius: '2px',
                mt: { xs: 1.5, sm: 2, md: 2.5 },
                overflow: 'hidden',
              }}
            >
              <Box
                sx={{
                  height: '100%',
                  backgroundColor: '#dc143c',
                  width: `${(questionNumber / totalQuestions) * 100}%`,
                  transition: 'width 0.3s ease',
                }}
              />
            </Box>
          </Box>
          <Typography
            sx={{
              color: '#5a3a3a',
              textAlign: 'center',
              fontWeight: 600,
              lineHeight: { xs: 1.6, sm: 1.7, md: 1.8, lg: 1.9 },
              fontSize: { xs: '1.4rem', sm: '1.8rem', md: '2.2rem', lg: '2.6rem' },
            }}
          >
            {question.question}
          </Typography>
        </CardContent>

        {/* Image Stickers */}
        {question.images && question.images.length > 0 && (
          <>
            {question.images.map((imagePath, index) => (
              <motion.div
                key={`${question.id}-img-${index}`}
                variants={jiggleVariants}
                animate="animate"
                style={{
                  position: 'absolute',
                  zIndex: 10 - index,
                  ...imagePositions[index % imagePositions.length],
                }}
              >
                <Box
                  component="img"
                  src={imagePath}
                  alt={`Question sticker ${index + 1}`}
                  sx={{
                    width: { xs: '90px', sm: '110px', md: '130px' },
                    height: { xs: '90px', sm: '110px', md: '130px' },
                    objectFit: 'cover',
                    filter: 'drop-shadow(0 4px 8px rgba(0, 0, 0, 0.2))',
                    border: '3px solid #ffffff',
                    borderRadius: '8px',
                    transform: `rotate(${imagePositions[index % imagePositions.length].rotate}deg)`,
                    transition: 'transform 0.2s ease',
                  }}
                />
              </motion.div>
            ))}
          </>
        )}
      </Card>
    </motion.div>
  );
};


