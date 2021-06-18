import gql from 'graphql-tag'

export const ALL_MAP = gql`
  query gameLocationsList{
  gameLocations{
    id
    name
    playerMax
    playerMin
  }
}
`
export const ALL_SERVER = gql`
  query serverList{
  servers{
    id
    name
    region{
      name
      id
    }
  }
}
`
