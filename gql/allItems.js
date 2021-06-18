import gql from 'graphql-tag'

export const ALL_ITEMS = gql`
  query LibraryQuery(
  $mapId: Int,
  $serverId: Int
  ) {
  items(mapId: $mapId, serverId:$serverId) {
    id
    title
    user{
      id
      fullName
      email
    }
    server{
      id
      name
      region{
        id
        name
      }
    }
    gameLocation{
      id
      name
      playerMax
      playerMin
    }
    itemUsers{
      user{
        id
        fullName
        email
      }
    }
  }
}
`
