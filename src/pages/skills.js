import PropTypes from 'prop-types'
import { useRouter } from 'next/router'

import Skills from 'components/Skills'

import client from 'graphql/client'
import { GET_SKILLS } from 'graphql/queries'

export const getStaticProps = async () => {
  const { skillsLists } = await client.request(GET_SKILLS)
  const result = []

  skillsLists.map(({ localizations }) =>
    localizations.map((entry) => result.push(entry))
  )

  return {
    revalidate: 60 * 60 * 24, // once per day
    props: {
      result
    }
  }
}

const SkillsPage = ({ result }) => {
  const { locale } = useRouter()
  const data = result.filter((entry) => entry.locale === locale)

  return <Skills skills={data} />
}

SkillsPage.propTypes = {
  result: PropTypes.array.isRequired
}

export default SkillsPage
