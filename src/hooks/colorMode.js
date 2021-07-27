import PropTypes from 'prop-types'
import { createContext, useContext, useMemo, useState } from 'react'
import { ThemeProvider } from '@material-ui/core/styles'

import { darkTheme, lightTheme } from 'styles/theme'

export const ColorModeContext = createContext({ toggleColorMode: () => {} })

export const ColorModeProvider = ({ children }) => {
  const [mode, setMode] = useState('light')
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'))
      }
    }),
    []
  )

  const theme = useMemo(
    () => (mode === 'dark' ? darkTheme : lightTheme),
    [mode]
  )

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export const useColorMode = () => useContext(ColorModeContext)

ColorModeProvider.propTypes = {
  children: PropTypes.node.isRequired
}
