import React, { memo, useEffect, useState } from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import FormControl from '@material-ui/core/FormControl'
import ListItemText from '@material-ui/core/ListItemText'
import Select from '@material-ui/core/Select'
import Input from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import { mapGame, serversList } from 'old_src/dataSelect'
import Button from '@material-ui/core/Button'

import { useRouter } from 'next/router'
import find from 'lodash/find'

import CustomizedSelects from 'old_src/components/Select'
import { useQuery } from '@apollo/react-hooks'
import { ALL_MAP, ALL_SERVER } from 'gql/allISettings'

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    maxWidth: 300,
  },
  chips: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  chip: {
    margin: 2,
  },
  noLabel: {
    marginTop: theme.spacing(3),
  },
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}))

const ITEM_HEIGHT = 48
const ITEM_PADDING_TOP = 8
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
}

function getStyles (name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  }
}

const GameFilterGameFilterFilterForm = () => {
  const router = useRouter()
  const { loading: geoLocationsLoading, data: dataGameLocation } = useQuery(ALL_MAP)
  const { loading: serversLoading, data: dataServer } = useQuery(ALL_SERVER)

  const { query, asPath } = router
  const classes = useStyles()
  const theme = useTheme()

  const [personMap, setPersonMap] = React.useState([])
  const [personServer, setPersonServer] = React.useState([])
  // const [personRole, setPersonRole] = React.useState([])
  // const [personLanguage, setPersonLanguage] = React.useState([])


  useEffect(() => {
    if (query.serverId) {
      const serverName = find(dataServer.servers, (i) => i.id === query.serverId) || null
      serverName && setPersonServer(serverName.name)
    }
    if (query.mapId) {
      const mapName = find(dataGameLocation.gameLocations, (i) => i.id === query.mapId) || null
      mapName && setPersonMap(mapName.name)
    }
  }, [
    geoLocationsLoading, serversLoading
  ])


  const handleChangeMap = (event) => setPersonMap(event.target.value)
  const handleChangeServer = (event) => setPersonServer(event.target.value)
  // const handleChangeRole = (event) => setPersonRole(event.target.value)
  // const handleChangeLanguage = (event) => setPersonLanguage(event.target.value)


  const onClose = () => {
    const serverId = find(dataServer.servers, (i) => i.name === personServer).id || null
    const mapId = find(dataGameLocation.gameLocations, (i) => i.name === personMap).id || null
    return router.push(asPath, `/gameList?serverId=${serverId}&mapId=${mapId}`)
  }



  if (geoLocationsLoading || serversLoading) {
    return <h1>Loading...</h1>
  }
  console.log('>>>sss', dataServer, dataGameLocation)
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Фильтр
      </Typography>

      <Grid container spacing={3}>
        {/*<Grid item xs={12}>*/}
        {/*  <CustomizedSelects*/}
        {/*    data={dataLanguageList.ru.map(i => i.name)}*/}
        {/*    label={'Язык'}*/}
        {/*    select={personLanguage}*/}
        {/*    onChange={handleChangeLanguage}*/}

        {/*    id={'list-of-languages'}*/}
        {/*  />*/}
        {/*</Grid>*/}
        <Grid item xs={12}>
          <CustomizedSelects
            data={dataServer.servers.map(i => i.name)}
            label={'Сервера'}
            select={personServer}
            onChange={handleChangeServer}
            id={'list-of-server'}
          />
        </Grid>
        <Grid item xs={12}>
          <CustomizedSelects
            data={dataGameLocation.gameLocations.map(i => i.name)}
            label={'Карты'}
            select={personMap}
            onChange={handleChangeMap}
            id={'list-of-map'}
          />
        </Grid>
        {/*<Grid item xs={12}>*/}
        {/*  <CustomizedSelects*/}
        {/*    data={dataRoleList.ru.map(i => i.name)}*/}
        {/*    label={'Роль'}*/}
        {/*    select={personRole}*/}
        {/*    onChange={handleChangeRole}*/}
        {/*    id={'list-of-role'}*/}
        {/*  />*/}
        {/*</Grid>*/}
        <Grid item xs={12}>
          <FormControl className={classes.formControl}>
            <Button
              variant="contained"
              color="primary"
              onClick={onClose}
            >Применить</Button>
          </FormControl>
        </Grid>
      </Grid>
    </React.Fragment>
  )

}
export default GameFilterGameFilterFilterForm
