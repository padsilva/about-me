import PropTypes from 'prop-types'
import { createContext, useContext, useEffect, useState } from 'react'
import { ThemeProvider } from '@material-ui/core/styles'

import { getStorageItem, setStorageItem } from 'utils/localStorage'
import { darkTheme, lightTheme } from 'styles/theme'

export const DarkModeDefaultValue = {
  darkMode: false,
  toggleTheme: () => null
}

export const DarkModeContext = createContext(DarkModeDefaultValue)

export const DarkModeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    const data = getStorageItem('darkMode')

    if (data) {
      setDarkMode(data)
    }
  }, [])

  const toggleTheme = () => {
    setDarkMode(!darkMode)
    const data = getStorageItem('darkMode')
    setStorageItem('darkMode', !data)
  }

  return (
    <DarkModeContext.Provider
      value={{
        darkMode,
        toggleTheme
      }}
    >
      <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
        {children}
      </ThemeProvider>
    </DarkModeContext.Provider>
  )
}

export const useDarkMode = () => useContext(DarkModeContext)

DarkModeProvider.propTypes = {
  children: PropTypes.node.isRequired
}
