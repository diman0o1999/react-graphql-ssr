import React from 'react'
import { withApollo } from 'libs/apollo'
import { useQuery } from '@apollo/react-hooks'
import { ALL_ITEMS } from 'gql/allItems'
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
import GameTableGameList from 'src/Game/Table/GameList'
import GameFilterGameFilter from 'src/Game/Filter/GameFilter'
import Grid from '@material-ui/core/Grid'
import { useRouter } from 'next/router'

const IndexPage = () => {
  const router = useRouter()
  const { query } = router
  console.log('>>>>>','data', query.mapId || null, query.serverId || null )

  const { loading, error, data } = useQuery(ALL_ITEMS,{
    variables:{
      mapId: parseInt(query.mapId) || null,
      serverId: parseInt(query.serverId) || null,
    }
  })

  if (error) return <h1>Error</h1>
  if (loading) return <h1>Loading...</h1>

  return (
    <Container maxWidth="xl">
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <GameFilterGameFilter/>
        </Grid>
        <Grid item xs={9}>
          <Box my={4}>
            <h1>Список лобби</h1>
            <div>
              <GameTableGameList
                data={data.items}
              />
            </div>
          </Box>
        </Grid>
      </Grid>
    </Container>
  )
}

export default withApollo(
  { ssr: true }
)(IndexPage)
