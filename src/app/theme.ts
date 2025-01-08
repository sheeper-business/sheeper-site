import { PaletteColor, PaletteColorOptions, createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';
import { colors } from './colors';

// Extend the Palette interface in the @mui/material/styles module
declare module '@mui/material/styles' {
  interface Palette {
    black: PaletteColor; // Ensure consistent type across declarations
    white: PaletteColor; // Ensure consistent type across declarations
  }

  interface PaletteOptions {
    black?: PaletteOptions['primary'];
    white?: PaletteOptions['primary'];
  }
}

declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    black: true;
    white: true;
  }
}

const createColor = (mainColor: string): PaletteColorOptions => ({
  main: mainColor,
});

const theme = createTheme({
  palette: {
    primary: {
      main: colors.primary,
    },
    secondary: {
      main: colors.secondary,
    },
    black: createColor(colors.black),
    white: createColor(colors.white),
    error: {
      main: red.A200,
    },
    info: {
      main: colors.white,
    },
  },
  typography: {
    fontFamily: 'Raleway',
    button: {
      textTransform: 'none',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none', // Prevent uppercase text
          // borderRadius: 4px, // Optional: Customize border radius
        },
      },
      variants: [
        {
          props: { color: 'black' }, // Applies when `color="black"`
          style: {
            fontFamily: 'Raleway',
            color: colors.black, // Label color
            backgroundColor: colors.white, // Button background
            border: `1px solid ${colors.black}`, // Black border
            '&:hover': {
              backgroundColor: '#f5f5f5', // Slightly darker white on hover
            },
          },
        },
        {
          props: { color: 'primary' }, // Applies when `color="black"`
          style: {
            fontFamily: 'Raleway',
            color: colors.primary, // Label color
            backgroundColor: '#E4F2FF', // Button background
            '&:hover': {
              backgroundColor: '#f5f5f5', // Slightly darker white on hover
            },
            // border: `1px solid ${colors.black}`, // Black border
          },
        },
      ],
    },
  },
});

export default theme;
