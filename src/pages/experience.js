import PropTypes from 'prop-types'
import { useRouter } from 'next/router'

import Experience from 'components/Experience'

import client from 'graphql/client'
import { GET_EXPERIENCES } from 'graphql/queries'

export const getStaticProps = async () => {
  const { experiences } = await client.request(GET_EXPERIENCES)
  const result = []

  experiences.map(({ localizations }) =>
    localizations.map((entry) => result.push(entry))
  )

  return {
    revalidate: 60 * 60 * 24, // once per day
    props: {
      result
    }
  }
}

const ExperiencePage = ({ result }) => {
  const { locale } = useRouter()
  const data = result.filter((entry) => entry.locale === locale)

  return <Experience experiences={data} />
}
ExperiencePage.propTypes = {
  result: PropTypes.array.isRequired
}

export default ExperiencePage
