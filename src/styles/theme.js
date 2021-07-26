import { createTheme, responsiveFontSizes } from '@material-ui/core/styles'

// Create a theme instance.
export const darkTheme = responsiveFontSizes(
  createTheme({
    components: {
      MuiToggleButton: {
        styleOverrides: {
          root: {
            '&.Mui-selected': {
              color: 'grey'
            }
          }
        }
      }
    },
    palette: {
      mode: 'dark',
      background: {
        paper: '#252525',
        default: '#121212'
      },
      primary: {
        main: '#90caf9',
        light: '#e3f2fd',
        dark: '#42a5f5',
        contrastText: 'rgba(0, 0, 0, 0.87)'
      },
      secondary: {
        main: '#f48fb1',
        light: '#f3e5f5',
        dark: '#ab47bc',
        contrastText: 'rgba(0, 0, 0, 0.87)'
      },
      error: {
        main: '#f3564a',
        light: '#e57373',
        dark: '#d32f2f'
      }
    }
  })
)

// Create a theme instance.
export const lightTheme = responsiveFontSizes(
  createTheme({
    components: {
      MuiToggleButton: {
        styleOverrides: {
          root: {
            '&.Mui-selected': {
              color: 'grey'
            }
          }
        }
      }
    },
    palette: {
      mode: 'light',
      background: {
        paper: '#fff',
        default: '#fff'
      },
      primary: {
        main: '#1976d2',
        light: '#42a5f5',
        dark: '#1565c0',
        contrastText: '#fff'
      },
      secondary: {
        main: '#9c27b0',
        light: '#ba68c8',
        dark: '#7b1fa2',
        contrastText: '#fff'
      },
      error: {
        main: '#e42a1d'
      }
    }
  })
)
