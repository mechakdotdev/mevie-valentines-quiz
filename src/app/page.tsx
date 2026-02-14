'use client';

import React, { useState } from 'react';
import { Box, Button, Typography, Stack, Card, CardContent } from '@mui/material';
import { useQuiz } from '@/context/QuizContext';
import { useMusic } from '@/context/MusicContext';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { RulesModal } from '@/components/RulesModal';

export default function HomePage() {
  const [showRules, setShowRules] = useState(false);
  const { resetQuiz } = useQuiz();
  const { playMusic } = useMusic();
  const router = useRouter();

  const handleStart = () => {
    resetQuiz();
    // Start playing background music
    playMusic('/music/background.mp3');
    setShowRules(true);
  };

  const handleCloseRules = () => {
    setShowRules(false);
    router.push('/quiz');
  };

  const containerVariants = {
    initial: { opacity: 0, y: 50 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    },
  };

  const heartVariants = {
    animate: {
      scale: [1, 1.2, 1],
      transition: { duration: 1.5, repeat: Infinity },
    },
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        px: 2,
        backgroundColor: '#fa86c4',
        backgroundImage: "url('/background-image.jpg')",
        backgroundSize: 'auto',
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: "url('/background-image.jpg')",
          backgroundSize: 'auto',
          backgroundAttachment: 'fixed',
          zIndex: -2,
          pointerEvents: 'none',
        },
        '&::after': {
          content: '""',
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(135deg, rgba(255, 240, 245, 0.4) 0%, rgba(255, 182, 193, 0.2) 100%)',
          zIndex: -1,
          pointerEvents: 'none',
        },
      }}
    >
      <motion.div variants={containerVariants} initial="initial" animate="animate">
        <Card
          sx={{
            maxWidth: { xs: '90%', sm: 500, md: 600 },
            width: '100%',
            backgroundColor: '#ffffff',
            boxShadow: '0 12px 32px rgba(220, 20, 60, 0.2)',
            border: '2px solid #dc143c',
            borderRadius: '16px',
          }}
        >
          <CardContent sx={{ p: { xs: 3, sm: 4, md: 5 } }}>
            <Stack spacing={ { xs: 2.5, sm: 3.5, md: 4 } } sx={{ textAlign: 'center' }}>
              <motion.div variants={heartVariants} animate="animate">
                <Typography sx={{ fontSize: { xs: '3.5rem', sm: '4.5rem', md: '5rem' } }}>💕</Typography>
              </motion.div>

              <Typography
                variant="h1"
                sx={{
                  color: '#8b0000',
                  fontSize: { xs: '1.8rem', sm: '2.5rem', md: '3.5rem' },
                  lineHeight: { xs: 1.3, sm: 1.4, md: 1.5 },
                  fontWeight: 700,
                }}
              >
                MEvie Valentine's Day Quiz
              </Typography>

              <Typography
                variant="h5"
                sx={{
                  color: '#5a3a3a',
                  fontStyle: 'italic',
                  fontWeight: 400,
                  fontSize: { xs: '0.95rem', sm: '1.1rem', md: '1.25rem' },
                  lineHeight: { xs: 1.5, sm: 1.6, md: 1.7 },
                }}
              >
                Test your love knowledge and see who really knows the relationship best!
              </Typography>

              <Button
                variant="contained"
                color="primary"
                size="large"
                onClick={handleStart}
                sx={{
                  borderRadius: '8px',
                  fontSize: { xs: '1rem', sm: '1.1rem', md: '1.2rem' },
                  px: { xs: 4, sm: 5, md: 6 },
                  py: { xs: 1.5, sm: 1.75, md: 2 },
                  mt: { xs: 1.5, sm: 2, md: 3 },
                  boxShadow: '0 8px 16px rgba(220, 20, 60, 0.3)',
                }}
              >
                Start Quiz ❤️
              </Button>
            </Stack>
          </CardContent>
        </Card>
      </motion.div>

      <RulesModal open={showRules} onClose={handleCloseRules} />
    </Box>
  );
}
