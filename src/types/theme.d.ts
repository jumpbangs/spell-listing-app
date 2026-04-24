import '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Palette {
    tertiary: Palette['primary'];
    neutral: Palette['primary'];
  }
  interface PaletteOptions {
    tertiary?: PaletteOptions['primary'];
    neutral?: PaletteOptions['primary'];
  }
}

// Allow color="tertiary" on Button, etc.
declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    tertiary: true;
    neutral: true;
  }
}
