import PropTypes from 'prop-types'
import { useRouter } from 'next/router'

import Home from 'components/Home'

import client from 'graphql/client'
import { GET_ABSTRACT } from 'graphql/queries'

export const getStaticProps = async () => {
  const { abstracts } = await client.request(GET_ABSTRACT)
  const result = []

  abstracts.map(({ localizations }) =>
    localizations.map((entry) => result.push(entry))
  )

  return {
    revalidate: 60 * 60 * 24, // once per day
    props: {
      result
    }
  }
}

const HomePage = ({ result }) => {
  const { locale } = useRouter()
  const data = result.filter((entry) => entry.locale === locale)

  return <Home abstract={data[0]} />
}

HomePage.propTypes = {
  result: PropTypes.array.isRequired
}

export default HomePage
