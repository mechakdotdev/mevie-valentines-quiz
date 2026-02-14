'use client';

import React, { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';

interface CountdownTimerProps {
  initialSeconds: number;
  onComplete?: () => void;
  key?: string | number;
}

export const CountdownTimer: React.FC<CountdownTimerProps> = ({ 
  initialSeconds, 
  onComplete 
}) => {
  const [timeLeft, setTimeLeft] = useState(initialSeconds);

  useEffect(() => {
    setTimeLeft(initialSeconds);
  }, [initialSeconds]);

  useEffect(() => {
    if (timeLeft <= 0) {
      onComplete?.();
      return;
    }

    const timer = setTimeout(() => {
      setTimeLeft(timeLeft - 0.1);
    }, 100);

    return () => clearTimeout(timer);
  }, [timeLeft, onComplete]);

  const progress = Math.max(0, timeLeft / initialSeconds) * 100;
  const displayTime = Math.ceil(timeLeft);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      <Box
        sx={{
          position: 'relative',
          width: '120px',
          height: '120px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          mx: 'auto',
          mb: 4,
        }}
      >
        {/* Outer ring background */}
        <svg
          width="120"
          height="120"
          style={{ position: 'absolute', transform: 'rotate(-90deg)' }}
        >
          {/* Background circle */}
          <circle
            cx="60"
            cy="60"
            r="55"
            fill="none"
            stroke="#f0f0f0"
            strokeWidth="8"
          />
          {/* Progress ring - smooth animation */}
          <circle
            cx="60"
            cy="60"
            r="55"
            fill="none"
            stroke={displayTime > 6 ? '#dc143c' : displayTime > 3 ? '#ff6b6b' : '#ff1493'}
            strokeWidth="8"
            strokeDasharray={`${2 * Math.PI * 55}`}
            strokeDashoffset={`${2 * Math.PI * 55 * (1 - progress / 100)}`}
            strokeLinecap="round"
            style={{ transition: 'stroke 0.3s ease' }}
          />
        </svg>

        {/* Timer text */}
        <Box
          sx={{
            textAlign: 'center',
            zIndex: 1,
          }}
        >
          <Typography
            sx={{
              fontSize: '2.5rem',
              fontWeight: 'bold',
              color: displayTime > 6 ? '#dc143c' : displayTime > 3 ? '#ff6b6b' : '#ff1493',
              lineHeight: 1,
              transition: 'color 0.3s ease',
            }}
          >
            {displayTime}
          </Typography>
          <Typography
            sx={{
              fontSize: '0.75rem',
              color: '#8b5a5a',
              fontWeight: 600,
              mt: 0.5,
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
            }}
          >
            seconds
          </Typography>
        </Box>
      </Box>
    </motion.div>
  );
};

