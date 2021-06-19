import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import Badge from '@material-ui/core/Badge';
import MailIcon from '@material-ui/icons/Mail';
import GameFilterGameFilterChipsFilter from './ChipFilter'
import GameFilterGameFilterFilterForm from './FilterForm'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    paddingTop: 20,
    height:50,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));


export default function GameFilterGameFilter() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <GameFilterGameFilterFilterForm />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
