import PropTypes from 'prop-types'
import Experience from 'components/Experience'

import client from 'graphql/client'
import { GET_EXPERIENCES } from 'graphql/queries'

export const getStaticProps = async () => {
  const { experiences } = await client.request(GET_EXPERIENCES)

  return {
    revalidate: 60 * 60 * 24, // once per day
    props: {
      experiences
    }
  }
}

const ExperiencePage = ({ experiences }) => (
  <Experience experiences={experiences} />
)

ExperiencePage.propTypes = {
  experiences: PropTypes.array.isRequired
}

export default ExperiencePage
