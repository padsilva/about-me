import PropTypes from 'prop-types'
import { useRouter } from 'next/router'

import Education from 'components/Education'

import client from 'graphql/client'
import { GET_EDUCATIONS } from 'graphql/queries'

export const getStaticProps = async () => {
  const { educations } = await client.request(GET_EDUCATIONS)
  const result = []

  educations.map(({ localizations }) =>
    localizations.map((entry) => result.push(entry))
  )

  return {
    revalidate: 60 * 60 * 24, // once per day
    props: {
      result
    }
  }
}

const EducationPage = ({ result }) => {
  const { locale } = useRouter()
  const data = result.filter((entry) => entry.locale === locale)

  return <Education educations={data} />
}

EducationPage.propTypes = {
  result: PropTypes.array.isRequired
}

export default EducationPage
