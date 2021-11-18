import { gql } from 'graphql-request'

export const GET_EDUCATIONS = gql`
  query getEducations {
    educations {
      localizations(includeCurrent: true) {
        id
        grade
        url
        institution
        startDate
        endDate
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
        startDate
        endDate
        description
        locale
      }
    }
  }
`
