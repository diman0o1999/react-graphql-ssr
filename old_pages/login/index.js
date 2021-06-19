import React from 'react'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import LoginForm from '../../old_src/components/login/form'
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    paddingTop: 20,
    height: 50,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}))
export default function Login () {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item  xs={4}/>
        <Grid item  xs={4}>
          <Paper className={classes.paper}>
            <LoginForm/>
          </Paper>
        </Grid>
      </Grid>
    </div>
  )
}
