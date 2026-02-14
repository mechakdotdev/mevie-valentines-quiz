import { createTheme } from '@mui/material/styles';

export const valentineTheme = createTheme({
  palette: {
    primary: {
      main: '#dc143c',
      light: '#ff6b6b',
      dark: '#8b0000',
    },
    secondary: {
      main: '#ff69b4',
      light: '#ffb3d9',
      dark: '#e94396',
    },
    background: {
      default: '#fdf5f7',
      paper: '#fff0f5',
    },
    text: {
      primary: '#2d1d1d',
      secondary: '#5a3a3a',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Geist", sans-serif',
    h1: {
      fontSize: '3rem',
      fontWeight: 700,
      color: '#8b0000',
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 600,
      color: '#dc143c',
    },
    h3: {
      fontSize: '1.5rem',
      fontWeight: 600,
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.6,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontSize: '1rem',
          borderRadius: '8px',
          transition: 'all 0.3s ease',
          '&:hover': {
            transform: 'translateY(-2px)',
            boxShadow: '0 8px 16px rgba(220, 20, 60, 0.3)',
          },
        },
        contained: {
          background: '#ffffff',
          color: '#dc143c',
          fontWeight: 600,
          border: '2px solid #dc143c',
          '&:hover': {
            background: '#f5f5f5',
            boxShadow: '0 8px 16px rgba(220, 20, 60, 0.4)',
          },
        },
        outlined: {
          color: '#dc143c',
          borderColor: '#dc143c',
          '&:hover': {
            background: 'rgba(220, 20, 60, 0.04)',
            borderColor: '#8b0000',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: '12px',
          backdropFilter: 'blur(10px)',
          backgroundColor: '#fa86c4',
          border: '2px solid #dc143c',
          transition: 'all 0.3s ease',
          '&:hover': {
            boxShadow: '0 12px 24px rgba(220, 20, 60, 0.3)',
          },
        },
      },
    },
  },
});


