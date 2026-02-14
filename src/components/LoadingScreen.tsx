'use client';

import React from 'react';
import { Box, Card, CardContent, Typography, Stack } from '@mui/material';
import { Favorite } from '@mui/icons-material';
import { motion } from 'framer-motion';

export const LoadingScreen: React.FC = () => {
  const heartContainerVariants = {
    initial: { scale: 0, opacity: 0 },
    animate: (i: number) => ({
      scale: 1,
      opacity: 1,
      transition: { delay: i * 0.1, duration: 0.4 },
    }),
  };

  const colorVariants = {
    animate: {
      color: ['#ffffff', '#dc143c', '#ffffff'],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fa86c4',
      }}
    >
      <Card
        sx={{
          maxWidth: 400,
          textAlign: 'center',
          boxShadow: '0 12px 32px rgba(220, 20, 60, 0.2)',
          border: '2px solid #dc143c',
        }}
      >
        <CardContent sx={{ p: 4 }}>
          <Typography 
            variant="h3" 
            sx={{ 
              mb: 4, 
              color: '#8b0000',
              fontWeight: 600,
            }}
          >
            Calculating Results...
          </Typography>
          <Stack
            direction="row"
            spacing={2}
            justifyContent="center"
            sx={{ mt: 4 }}
          >
            {[0, 1, 2, 3, 4].map((i) => (
              <motion.div
                key={i}
                custom={i}
                variants={heartContainerVariants}
                initial="initial"
                animate="animate"
              >
                <motion.div
                  variants={colorVariants}
                  animate="animate"
                >
                  <Favorite
                    sx={{
                      fontSize: '2.5rem',
                      filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1))',
                    }}
                  />
                </motion.div>
              </motion.div>
            ))}
          </Stack>
        </CardContent>
      </Card>
    </Box>
  );
};

