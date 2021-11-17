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
