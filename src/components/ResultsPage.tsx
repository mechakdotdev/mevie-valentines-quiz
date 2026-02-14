'use client';

import React, { useEffect } from 'react';
import { Box, Card, CardContent, Typography, Button, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import { useQuiz } from '@/context/QuizContext';
import confetti from 'canvas-confetti';

interface ResultsPageProps {
  onPlayAgain: () => void;
}

export const ResultsPage: React.FC<ResultsPageProps> = ({ onPlayAgain }) => {
  const { contestants } = useQuiz();

  const mechakScore = contestants.mechak.score;
  const evieScore = contestants.evie.score;
  const winner =
    mechakScore > evieScore
      ? 'Mechak'
      : evieScore > mechakScore
        ? 'Evie'
        : 'Both';
  const difference = Math.abs(mechakScore - evieScore);
  
  // Determine winner image
  const winnerImagePath = 
    winner === 'Mechak' 
      ? '/images/questions/mechak-win.jpg'
      : winner === 'Evie'
        ? '/images/questions/evie-win.png'
        : null;

  useEffect(() => {
    const duration = 3000;
    const animationEnd = Date.now() + duration;

    const randomInRange = (min: number, max: number) => {
      return Math.random() * (max - min) + min;
    };

    const confettiAnimation = () => {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return;
      }

      confetti({
        particleCount: 3,
        angle: randomInRange(55, 125),
        spread: randomInRange(50, 70),
        origin: { x: randomInRange(0.1, 0.9), y: Math.random() - 0.2 },
        colors: ['#ff69b4', '#ff1493', '#ffb3d9', '#ffc0d9'],
      });

      requestAnimationFrame(confettiAnimation);
    };

    confettiAnimation();
  }, []);

  const heartVariants = {
    animate: {
      y: [0, -30, 0],
      opacity: [0, 1, 0],
      transition: { duration: 2, repeat: Infinity },
    },
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
      }}
    >
      {/* Floating hearts background */}
      <Stack
        direction="row"
        spacing={ { xs: 2, sm: 3, md: 4 } }
        sx={{
          position: 'absolute',
          width: '100%',
          justifyContent: 'space-around',
          pointerEvents: 'none',
          px: { xs: 1, sm: 2 }
        }}
      >
        {[0, 1, 2, 3, 4].map((i) => (
          <motion.div key={i} variants={heartVariants} animate="animate">
            <Typography sx={{ fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' } }}>❤️</Typography>
          </motion.div>
        ))}
      </Stack>

      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 50 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Card
          sx={{
            maxWidth: { xs: '95%', sm: 600, md: 700 },
            boxShadow: '0 16px 48px rgba(220, 20, 60, 0.3)',
            position: 'relative',
            zIndex: 10,
          }}
        >
          <CardContent sx={{ p: { xs: 3, sm: 4, md: 6 }, textAlign: 'center' }}>
            {/* Congratulations section */}
            {winner === 'Both' ? (
              // Tie scenario
              <>
                <Typography
                  variant="h1"
                  sx={{
                    mb: { xs: 2, sm: 3, md: 4 },
                    fontSize: { xs: '1.8rem', sm: '2.5rem', md: '3rem' },
                    background: 'linear-gradient(135deg, #dc143c 0%, #8b0000 100%)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    lineHeight: { xs: 1.2, sm: 1.3, md: 1.4 }
                  }}
                >
                  Congratulations! 🎉
                </Typography>

                <Typography
                  sx={{
                    mb: { xs: 2.5, sm: 3, md: 4 },
                    fontSize: { xs: '1rem', sm: '1.1rem', md: '1.25rem' },
                    lineHeight: { xs: 1.6, sm: 1.7, md: 1.8 },
                    color: '#5a3a3a',
                    fontWeight: 500,
                  }}
                >
                  We're both winners because we're in this relationship! 💕
                </Typography>
              </>
            ) : (
              // Winner scenario with image
              <>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: { xs: 2, sm: 3, md: 4 }, mb: { xs: 2, sm: 3, md: 4 } }}>
                  {/* Winner Image */}
                  {winnerImagePath && (
                    <Box
                      component="img"
                      src={winnerImagePath}
                      alt={`${winner} wins!`}
                      sx={{
                        width: { xs: '80px', sm: '120px', md: '150px' },
                        height: { xs: '80px', sm: '120px', md: '150px' },
                        objectFit: 'cover',
                        borderRadius: '12px',
                        border: '3px solid #dc143c',
                        boxShadow: '0 4px 12px rgba(220, 20, 60, 0.3)',
                      }}
                    />
                  )}
                  
                  <Typography
                    variant="h1"
                    sx={{
                      fontSize: { xs: '1.8rem', sm: '2.5rem', md: '3rem' },
                      background: 'linear-gradient(135deg, #dc143c 0%, #8b0000 100%)',
                      backgroundClip: 'text',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      lineHeight: { xs: 1.2, sm: 1.3, md: 1.4 }
                    }}
                  >
                    Congratulations pookster! 🎉
                  </Typography>
                </Box>

                <Typography 
                  variant="h3" 
                  sx={{ 
                    mb: { xs: 2, sm: 2.5, md: 3 }, 
                    color: '#8b0000',
                    fontSize: { xs: '1.4rem', sm: '1.8rem', md: '2.2rem' }
                  }}
                >
                  We both won!
                </Typography>

                <Typography
                  sx={{
                    mb: { xs: 2.5, sm: 3, md: 4 },
                    fontSize: { xs: '0.95rem', sm: '1.05rem', md: '1.1rem' },
                    lineHeight: { xs: 1.6, sm: 1.7, md: 1.8 },
                    color: '#5a3a3a',
                  }}
                >
                  Because the real prize is this great relationship
                </Typography>

                <Typography
                  variant="body2"
                  sx={{
                    mb: 4,
                    fontSize: '0.95rem',
                    color: '#8b5a5a',
                    fontStyle: 'italic',
                  }}
                >
                  although if we wanna be specific <strong>{winner}</strong> won with{' '}
                  <strong>{Math.max(mechakScore, evieScore)} point(s)</strong> ({difference} more than{' '}
                  <strong>{winner === 'Mechak' ? 'Evie' : 'Mechak'}</strong>)... but who's really
                  keeping count eh? :)
                </Typography>
              </>
            )}

            {/* ...existing code... */}

            <Box
              sx={{
                my: { xs: 2.5, sm: 3, md: 4 },
                p: { xs: 1.5, sm: 2, md: 2.5 },
                backgroundColor: 'rgba(220, 20, 60, 0.08)',
                borderRadius: '8px',
                border: '2px solid rgba(220, 20, 60, 0.2)',
              }}
            >
              <Typography 
                variant="h6" 
                sx={{ 
                  color: '#8b0000', 
                  mb: 1,
                  fontSize: { xs: '1rem', sm: '1.1rem', md: '1.25rem' }
                }}
              >
                Final Scores
              </Typography>
              <Stack spacing={ { xs: 0.5, sm: 1 } }>
                <Typography 
                  sx={{ 
                    fontSize: { xs: '1rem', sm: '1.1rem', md: '1.2rem' }, 
                    fontWeight: 600 
                  }}
                >
                  Mechak: <span style={{ color: '#dc143c' }}>{mechakScore}</span>
                </Typography>
                <Typography 
                  sx={{ 
                    fontSize: { xs: '1rem', sm: '1.1rem', md: '1.2rem' }, 
                    fontWeight: 600 
                  }}
                >
                  Evie: <span style={{ color: '#dc143c' }}>{evieScore}</span>
                </Typography>
              </Stack>
            </Box>

            <Button
              variant="contained"
              color="primary"
              size="large"
              onClick={onPlayAgain}
              sx={{
                borderRadius: '8px',
                fontSize: { xs: '0.95rem', sm: '1.05rem', md: '1.1rem' },
                px: { xs: 3, sm: 4, md: 5 },
                py: { xs: 1.2, sm: 1.5, md: 1.8 },
              }}
            >
              Play Again 💕
            </Button>
          </CardContent>
        </Card>
      </motion.div>
    </Box>
  );
};

