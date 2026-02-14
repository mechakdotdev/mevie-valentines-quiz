'use client';

import React, { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import { motion } from 'framer-motion';

interface FloatingHeart {
  id: number;
  left: number;
  delay: number;
  duration: number;
}

export const FloatingHearts: React.FC = () => {
  const [hearts, setHearts] = useState<FloatingHeart[]>([]);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    // Generate random floating hearts only on client side
    const generatedHearts: FloatingHeart[] = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 8 + Math.random() * 6,
    }));
    setHearts(generatedHearts);
  }, []);

  const heartVariants = {
    animate: (custom: any) => ({
      y: [0, -window.innerHeight - 100, -window.innerHeight - 100],
      opacity: [0, 1, 0],
      transition: {
        duration: custom.duration,
        delay: custom.delay,
        repeat: Infinity,
        repeatDelay: 3,
      },
    }),
  };

  // Don't render anything until client-side hydration is complete
  if (!isClient) {
    return null;
  }

  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        pointerEvents: 'none',
        zIndex: 0,
        overflow: 'hidden',
      }}
    >
      {hearts.map((heart) => (
        <motion.div
          key={heart.id}
          custom={{ duration: heart.duration, delay: heart.delay }}
          variants={heartVariants}
          animate="animate"
          style={{
            position: 'fixed',
            left: `${heart.left}%`,
            bottom: '-20px',
            fontSize: '2rem',
            filter: 'blur(1px)',
          }}
        >
          ❤️
        </motion.div>
      ))}
    </Box>
  );
};


