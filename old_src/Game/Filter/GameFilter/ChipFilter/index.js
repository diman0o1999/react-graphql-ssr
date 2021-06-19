import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import FaceIcon from '@material-ui/icons/Face';
import DoneIcon from '@material-ui/icons/Done';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(0.5),
    },
  },
}));

export default function GameFilterGameFilterChipsFilter() {
  const classes = useStyles();


  const filterData = [
    'Завод',
    'RUS',
    'Москва'
  ];
  const handleDelete = (item) => {
    console.info('You clicked the delete icon.',item);
  };

  return (
    <div className={classes.root}>
      {filterData.map((item)=>(
        <Chip
          size="small"
          label={item}
          onDelete={()=>handleDelete(item)}
          color="primary"
        />
      ))}

    </div>
  );
}
