import { gql } from '@apollo/client'
import { UserFragment } from 'gql/usersSchema'
import { GameLocationFragment, ServerFragment } from 'gql/allISettings'

export const ALL_ITEMS = gql`
  ${UserFragment}
  ${ServerFragment}
  ${GameLocationFragment}
  query LibraryQuery(
  $mapId: Int,
  $serverId: Int
  ) {
  items(mapId: $mapId, serverId:$serverId) {
    id
    title
    user{
      ...UserFragment
    }
    server{
      ...ServerFragment
    }
    gameLocation{
      ...GameLocationFragment
    }
    itemUsers{
      user{
        ...UserFragment
      }
    }
  }
}
`
