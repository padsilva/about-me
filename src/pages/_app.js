import PropTypes from 'prop-types'
import Head from 'next/head'
import { CssBaseline, ThemeProvider } from '@material-ui/core'

import { darkTheme, lightTheme } from 'styles/theme'
import Base from 'components/Base'
import ScrollTop from 'components/ScrollTop'
import { useState } from 'react'

const App = ({ Component, pageProps }) => {
  const [darkMode, setDarkMode] = useState(false)

  const toggleDarkTheme = () => setDarkMode(!darkMode)

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Head>
        <title>Paulo Silva</title>
        <link rel="shortcut icon" href="/img/icon-512.png" />
        <link rel="apple-touch-icon" href="/img/icon-512.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta
          name="theme-color"
          content={
            darkMode
              ? darkTheme.palette.primary.main
              : lightTheme.palette.primary.main
          }
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
        <meta
          name="description"
          content="Paulo Silva's page with details about his experience, education, skills and projects."
        />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <CssBaseline />
      <Base onToggleDark={toggleDarkTheme}>
        <Component {...pageProps} />
      </Base>
      <ScrollTop />
    </ThemeProvider>
  )
}

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired
}

export default App
