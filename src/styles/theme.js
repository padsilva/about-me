import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles'

// Create a theme instance.
export const darkTheme = responsiveFontSizes(
  createMuiTheme({
    palette: {
      type: 'dark'
    }
  })
)

// Create a theme instance.
export const lightTheme = responsiveFontSizes(
  createMuiTheme({
    palette: {
      type: 'light'
    }
  })
)
