'use client';

import React, { createContext, useContext, useRef, useState, ReactNode } from 'react';

interface MusicContextType {
  isPlaying: boolean;
  toggleMusic: () => void;
  playMusic: (src: string) => void;
  stopMusic: () => void;
  setVolume: (volume: number) => void;
}

const MusicContext = createContext<MusicContextType | undefined>(undefined);

export const MusicProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const playMusic = (src: string) => {
    if (!audioRef.current) {
      audioRef.current = new Audio(src);
      audioRef.current.loop = true;
      audioRef.current.volume = 0.3;
      
      // Error handling for missing or invalid audio files
      audioRef.current.onerror = () => {
        console.warn(`Could not load audio file: ${src}. Make sure the file exists in public/music/`);
      };
    }

    if (audioRef.current.src !== src) {
      audioRef.current.src = src;
    }

    audioRef.current.play().catch((error) => {
      console.warn('Audio playback failed or file not found:', error.message);
    });

    setIsPlaying(true);
  };

  const stopMusic = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
    setIsPlaying(false);
  };

  const toggleMusic = () => {
    if (isPlaying) {
      stopMusic();
    } else if (audioRef.current && audioRef.current.src) {
      audioRef.current.play().catch((error) => {
        console.warn('Audio playback failed:', error.message);
      });
      setIsPlaying(true);
    }
  };

  const setVolume = (volume: number) => {
    if (audioRef.current) {
      audioRef.current.volume = Math.max(0, Math.min(1, volume));
    }
  };

  return (
    <MusicContext.Provider value={{ isPlaying, toggleMusic, playMusic, stopMusic, setVolume }}>
      {children}
    </MusicContext.Provider>
  );
};

export const useMusic = () => {
  const context = useContext(MusicContext);
  if (!context) {
    throw new Error('useMusic must be used within MusicProvider');
  }
  return context;
};

