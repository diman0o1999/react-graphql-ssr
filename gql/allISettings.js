import { gql } from '@apollo/client'

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
      name
      id
      region{
        name
        id
      }
    }
  }
`
export const ServerFragment = gql`
  fragment ServerFragment on Server {
    name
    id
    region{
      name
      id
    }
  }
`

export const RegionFragment = gql`
  fragment RegionFragment on Region {
    name
    id
  }
`

export const GameLocationFragment = gql`
  fragment GameLocationFragment on GameLocation {
    id
    name
    playerMax
    playerMin
    locationUrl
  }
`
