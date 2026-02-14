'use client';

import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { valentineTheme } from '@/theme/theme';
import { ReactNode } from 'react';

export function MUIThemeProvider({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider theme={valentineTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}

