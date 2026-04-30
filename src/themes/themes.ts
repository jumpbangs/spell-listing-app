import { createTheme, ThemeOptions } from '@mui/material';

const sharedConfig: ThemeOptions = {
  typography: {
    fontFamily: '"Space Grotesk Variable", "Space Grotesk", sans-serif',
    h1: { fontSize: '3rem', fontWeight: 700, letterSpacing: '-0.02em' },
    h2: { fontSize: '2.25rem', fontWeight: 700 },
    h3: { fontSize: '1.75rem', fontWeight: 600 },
    h4: { fontSize: '1.5rem', fontWeight: 600 },
    body1: { fontSize: '1rem', lineHeight: 1.6 },
    body2: { fontSize: '0.875rem', lineHeight: 1.5 },
    button: { textTransform: 'none', fontWeight: 600 },
    caption: { fontSize: '0.75rem' },
  },
  shape: {
    borderRadius: 2,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 2,
          padding: '8px 20px',
        },
      },
      defaultProps: {
        disableElevation: true,
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 2,
          boxShadow: 'none',
          backgroundColor: '#F5F5F5',
        },
      },
    },
    MuiTextField: {
      defaultProps: {
        variant: 'outlined',
      },
    },
  },
};

export const lightTheme = createTheme({
  ...sharedConfig,
  palette: {
    mode: 'light',
    primary: {
      main: '#2A4B5D',
      light: '#D2E2EE',
      dark: '#103446',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#103446',
      light: '#2A4B5D',
      dark: '#0A2331',
      contrastText: '#FFFFFF',
    },
    error: {
      main: '#690008',
      light: '#8B1A22',
      dark: '#4A0006',
      contrastText: '#FFFFFF',
    },
    background: {
      default: '#F3F3F3',
      paper: '#FFFFFF',
    },
    text: {
      primary: '#1A1C1C',
      secondary: '#2A4B5D',
      disabled: '#C2C7CC',
    },
    divider: '#DEDEDE',
    action: {
      hover: '#F9F9F9',
      selected: '#E8E8E8',
      disabled: '#C2C7CC',
      disabledBackground: '#E8E8E8',
    },
    grey: {
      50: '#F9F9F9',
      100: '#F3F3F3',
      200: '#E8E8E8',
      300: '#DEDEDE',
      400: '#C2C7CC',
      900: '#1A1C1C',
    },
  },
});

export const darkTheme = createTheme({
  ...sharedConfig,
  palette: {
    mode: 'dark',
    primary: {
      main: '#D2E2EE',
      light: '#FFFFFF',
      dark: '#2A4B5D',
      contrastText: '#103446',
    },
    secondary: {
      main: '#2A4B5D',
      light: '#D2E2EE',
      dark: '#103446',
      contrastText: '#FFFFFF',
    },
    error: {
      main: '#690008',
      light: '#8B1A22',
      dark: '#4A0006',
      contrastText: '#FFFFFF',
    },
    background: {
      default: '#1A1C1C',
      paper: '#2A2C2C',
    },
    text: {
      primary: '#F9F9F9',
      secondary: '#C2C7CC',
      disabled: '#C2C7CC',
    },
    divider: 'rgba(194, 199, 204, 0.15)',
    action: {
      hover: 'rgba(210, 226, 238, 0.08)',
      selected: 'rgba(210, 226, 238, 0.16)',
      disabled: 'rgba(194, 199, 204, 0.3)',
      disabledBackground: 'rgba(194, 199, 204, 0.12)',
    },
    grey: {
      50: '#F9F9F9',
      100: '#F3F3F3',
      200: '#E8E8E8',
      300: '#DEDEDE',
      400: '#C2C7CC',
      900: '#1A1C1C',
    },
  },
});
