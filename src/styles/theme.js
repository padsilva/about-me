import { createTheme, responsiveFontSizes } from '@material-ui/core/styles'

// Create a theme instance.
export const darkTheme = responsiveFontSizes(
  createTheme({
    palette: {
      type: 'dark',
      background: {
        paper: '#252525',
        default: '#121212',
        level2: '#333',
        level1: '#212121'
      },
      primary: {
        main: '#90caf9',
        light: 'rgb(166, 212, 250)',
        dark: 'rgb(100, 141, 174)',
        contrastText: 'rgba(0, 0, 0, 0.87)'
      },
      secondary: {
        main: '#f48fb1',
        light: 'rgb(246, 165, 192)',
        dark: 'rgb(170, 100, 123)',
        contrastText: 'rgba(0, 0, 0, 0.87)'
      },
      error: {
        main: '#f3564a'
      }
    }
  })
)

// Create a theme instance.
export const lightTheme = responsiveFontSizes(
  createTheme({
    palette: {
      type: 'light',
      background: {
        paper: '#fff',
        default: '#fff',
        level2: '#f5f5f5',
        level1: '#fff'
      },
      primary: {
        main: '#1976d2',
        light: 'rgb(71, 145, 219)',
        dark: 'rgb(17, 82, 147)',
        contrastText: '#fff'
      },
      secondary: {
        main: 'rgb(220, 0, 78)',
        light: 'rgb(227, 51, 113)',
        dark: 'rgb(154, 0, 54)',
        contrastText: '#fff'
      },
      error: {
        main: '#e42a1d'
      }
    }
  })
)
