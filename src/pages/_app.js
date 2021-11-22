import PropTypes from 'prop-types'
import { IntlProvider } from 'react-intl'
import { useRouter } from 'next/router'
import Head from 'next/head'
import { CssBaseline } from '@mui/material'
import { CacheProvider } from '@emotion/react'
import createCache from '@emotion/cache'

import Base from 'components/Base'
import ScrollTop from 'components/ScrollTop'

import { ColorModeProvider } from 'hooks/colorMode'

import messages_en from 'lang/en.json'
import messages_pt from 'lang/pt.json'

const cache = createCache({ key: 'css' })
cache.compat = true

const App = ({ Component, pageProps }) => {
  const { locale, defaultLocale } = useRouter()
  const messages = {
    en: messages_en,
    pt: messages_pt
  }

  return (
    <CacheProvider value={cache}>
      <IntlProvider
        locale={locale}
        defaultLocale={defaultLocale}
        messages={messages[locale]}
      >
        <ColorModeProvider>
          <Head>
            <meta
              name="google-site-verification"
              content="pM0VV9O2-QE_DFgTJpfdEQu9st9jxjHU8PQVAORwCLc"
            />
            <title>{process.env.NEXT_PUBLIC_AUTHOR || 'John Doe'}</title>
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
        </ColorModeProvider>
      </IntlProvider>
    </CacheProvider>
  )
}

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired
}

export default App
