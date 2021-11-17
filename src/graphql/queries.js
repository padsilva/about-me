import { gql } from 'graphql-request'

export const GET_EDUCATIONS = gql`
  query getEducations {
    educations {
      id
      grade
      url
      institution
      startDate
      endDate
      description
    }
  }
`

export const GET_EXPERIENCES = gql`
  query getExperiences {
    experiences {
      id
      position
      url
      institution
      startDate
      endDate
      description
    }
  }
`
