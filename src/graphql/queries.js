import { gql } from 'graphql-request'

export const GET_EDUCATIONS = gql`
  query getEducations {
    educations {
      localizations(includeCurrent: true) {
        id
        grade
        url
        institution
        start
        end
        description
        locale
      }
    }
  }
`

export const GET_EXPERIENCES = gql`
  query getExperiences {
    experiences {
      localizations(includeCurrent: true) {
        id
        position
        url
        institution
        start
        end
        description
        locale
      }
    }
  }
`

export const GET_ABSTRACT = gql`
  query getAbstract {
    abstracts {
      localizations(includeCurrent: true) {
        avatar {
          url
        }
        name
        position
        birthdate
        hometown
        country
        description
        locale
      }
    }
  }
`

export const GET_SKILLS = gql`
  query getSkills {
    skillsLists {
      localizations(includeCurrent: true) {
        label
        title
        skills {
          name
          link
          level
        }
        locale
      }
    }
  }
`
