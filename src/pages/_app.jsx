import PropTypes from 'prop-types'
import Head from 'next/head'
import { CssBaseline, ThemeProvider } from '@material-ui/core'

import theme from 'styles/theme'

const App = ({ Component, pageProps }) => (
  <ThemeProvider theme={theme}>
    <Head>
      <title>My page</title>
      <link rel="shortcut icon" href="/img/icon-512.png" />
      <link rel="apple-touch-icon" href="/img/icon-192.png" />
      <link rel="manifest" href="/manifest.json" />
      <meta
        name="viewport"
        content="minimum-scale=1, initial-scale=1, width=device-width"
      />
    </Head>
    <CssBaseline />
    <Component {...pageProps} />
  </ThemeProvider>
)

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired
}

export default App
