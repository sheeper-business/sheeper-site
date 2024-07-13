/* eslint-disable no-unused-vars */
import {
    PaletteColor,
    PaletteColorOptions,
    createTheme
  } from '@mui/material/styles'
  import { red } from '@mui/material/colors'
import { colors } from './colors'
  
  // Extend the Palette interface in the @mui/material/styles module
  declare module '@mui/material/styles' {
    interface Palette {
      black: PaletteColor // Ensure consistent type across declarations
      white: PaletteColor // Ensure consistent type across declarations
    }
  }
  
  // Extend the PaletteOptions interface in the @mui/material/styles module
  declare module '@mui/material/styles' {
    interface PaletteOptions {
      black?: PaletteOptions['primary'] // Ensure consistent type across declarations
      white?: PaletteOptions['primary'] // Ensure consistent type across declarations
    }
  }
  
  declare module '@mui/material/styles' {
    interface CustomPalette {
      black: PaletteColorOptions
      white: PaletteColorOptions
    }
  }
  
  declare module '@mui/material/Button' {
    interface ButtonPropsColorOverrides {
      black: true
      white: true
    }
  }
  declare module '@mui/material/styles' {
    interface Palette {
      black: Palette['primary']
      white: Palette['primary']
    }
  
    interface PaletteOptions {
      black?: PaletteOptions['primary']
      wite?: PaletteOptions['primary']
    }
  }
  
  declare module '@mui/material/IconButton' {
    interface IconButtonPropsColorOverrides {
      black: true
      white: true
    }
  }
  
  const { palette } = createTheme()
  const { augmentColor } = palette
  const createColor = (mainColor: string) =>
    augmentColor({ color: { main: mainColor } })
  
  const theme = createTheme({
    palette: {
      primary: {
        main: colors.primary
      },
      secondary: {
        main: colors.secondary
      },
      black: createColor(colors.black),
      white: {
        main: colors.white
      },
      error: {
        main: red.A200
      },
      info: {
        main: colors.white
      }
    },
    typography: {
      fontFamily: 'Raleway',
      button: {
        textTransform: 'none'
      }
    }
  })
  
  export default theme
  