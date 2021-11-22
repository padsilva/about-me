import PropTypes from 'prop-types'
import { useRouter } from 'next/router'

import Projects from 'components/Projects'

import client from 'graphql/client'
import { GET_PROJECTS } from 'graphql/queries'

export const getStaticProps = async () => {
  const { projects } = await client.request(GET_PROJECTS)
  const result = []

  projects.map(({ localizations }) =>
    localizations.map((entry) => result.push(entry))
  )

  return {
    revalidate: 60 * 60 * 24, // once per day
    props: {
      result
    }
  }
}

const ProjectsPage = ({ result }) => {
  const { locale } = useRouter()
  const data = result.filter((entry) => entry.locale === locale)

  return <Projects projects={data} />
}

ProjectsPage.propTypes = {
  result: PropTypes.array.isRequired
}

export default ProjectsPage
