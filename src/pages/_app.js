import PropTypes from 'prop-types'
import { IntlProvider } from 'react-intl'
import { useRouter } from 'next/router'
import Head from 'next/head'
import { CssBaseline } from '@material-ui/core'

import Base from 'components/Base'
import ScrollTop from 'components/ScrollTop'
import messages_en from 'lang/en.json'
import messages_pt from 'lang/pt.json'
import { DarkModeProvider } from 'hooks/darkMode'

const App = ({ Component, pageProps }) => {
  const router = useRouter()
  const { locale, defaultLocale } = router
  const messages = {
    en: messages_en,
    pt: messages_pt
  }

  return (
    <IntlProvider
      locale={locale}
      defaultLocale={defaultLocale}
      messages={messages[locale]}
    >
      <DarkModeProvider>
        <Head>
          <meta
            name="google-site-verification"
            content="pM0VV9O2-QE_DFgTJpfdEQu9st9jxjHU8PQVAORwCLc"
          />
          <script src="https://www.google.com/recaptcha/api.js" async defer />
          <title>Paulo Silva</title>
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/favicon/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon/favicon-16x16.png"
          />
          <link
            rel="mask-icon"
            href="/favicon/safari-pinned-tab.svg"
            color="#000000"
          />
          <link rel="shortcut icon" href="/favicon/favicon.ico" />
          <link rel="manifest" href="/manifest.json" />
          <meta name="theme-color" content="#ffffff" />
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
        <Base>
          <Component {...pageProps} />
        </Base>
        <ScrollTop />
      </DarkModeProvider>
    </IntlProvider>
  )
}

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired
}

export default App
