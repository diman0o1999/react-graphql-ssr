import gql from 'graphql-tag'

export const ALL_ITEMS = gql`
  query LibraryQuery {
  items {
    id
    title
    imageUrl
    description
    user {
      id
      email
    }
    
  }
}
`
