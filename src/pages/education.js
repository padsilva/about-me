import PropTypes from 'prop-types'
import Education from 'components/Education'

import client from 'graphql/client'
import { GET_EDUCATIONS } from 'graphql/queries'

export const getStaticProps = async () => {
  const { educations } = await client.request(GET_EDUCATIONS)

  return {
    revalidate: 60 * 60 * 24, // once per day
    props: {
      educations
    }
  }
}

const EducationPage = ({ educations }) => <Education educations={educations} />

EducationPage.propTypes = {
  educations: PropTypes.array.isRequired
}

export default EducationPage
