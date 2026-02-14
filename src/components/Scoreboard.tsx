'use client';

import React from 'react';
import { Box, Card, CardContent, Button, Stack, Typography } from '@mui/material';
import { useQuiz } from '@/context/QuizContext';
import { Add, Remove } from '@mui/icons-material';

export const Scoreboard: React.FC = () => {
  const { contestants, updateScore } = useQuiz();

  return (
    <Card
      sx={{
        position: 'fixed',
        top: { xs: 12, sm: 16, md: 20 },
        right: { xs: 12, sm: 16, md: 20 },
        minWidth: { xs: 240, sm: 280, md: 320 },
        zIndex: 100,
        boxShadow: '0 8px 24px rgba(220, 20, 60, 0.25)',
        border: '2px solid #dc143c',
      }}
    >
      <CardContent sx={{ p: { xs: 2, sm: 3 } }}>
        <Stack spacing={ { xs: 2, sm: 3 } }>
          {Object.entries(contestants).map(([key, contestant]) => (
            <Box key={key}>
              <Typography 
                variant="h6" 
                sx={{ 
                  mb: 1, 
                  color: '#8b0000',
                  fontSize: { xs: '0.95rem', sm: '1.1rem', md: '1.25rem' }
                }}
              >
                {contestant.name}
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: { xs: 0.5, sm: 1 } }}>
                <Button
                  size="small"
                  variant="outlined"
                  color="primary"
                  onClick={() => updateScore(key as 'mechak' | 'evie', -1)}
                  sx={{ minWidth: { xs: '36px', sm: '40px' } }}
                >
                  <Remove fontSize="small" />
                </Button>
                <Typography
                  sx={{
                    fontSize: { xs: '1.2rem', sm: '1.5rem', md: '1.75rem' },
                    fontWeight: 'bold',
                    color: '#8b0000',
                    minWidth: { xs: '60px', sm: '80px' },
                    textAlign: 'center',
                  }}
                >
                  {contestant.score}
                </Typography>
                <Button
                  size="small"
                  variant="contained"
                  color="primary"
                  onClick={() => updateScore(key as 'mechak' | 'evie', 1)}
                  sx={{ minWidth: { xs: '36px', sm: '40px' } }}
                >
                  <Add fontSize="small" />
                </Button>
              </Box>
            </Box>
          ))}
        </Stack>
      </CardContent>
    </Card>
  );
};

