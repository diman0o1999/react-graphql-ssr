import React from 'react'
import { makeStyles, withStyles } from '@material-ui/core/styles'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import NativeSelect from '@material-ui/core/NativeSelect'
import InputBase from '@material-ui/core/InputBase'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: '25ch',
  },
  margin: {
    margin: theme.spacing(1),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    maxWidth: 300,
  },
}))

export default function LoginForm () {
  const classes = useStyles()

  const handleChange = (event) => onChange(event)
  const handleChange =()=>{

  }
  return (
    <FormControl className={classes.margin}>

      <TextField
        id="login"
        label="Логин"
        style={{ margin: 8 }}
        placeholder=""
        helperText=""
        fullWidth
        margin="normal"
        InputLabelProps={{
          shrink: true,
        }}
      />
      <TextField
        id="password"
        label="Пароль"
        type="password"
        style={{ margin: 8 }}
        placeholder=""
        helperText=""
        fullWidth
        margin="normal"
        InputLabelProps={{
          shrink: true,
        }}
      />
      <FormControl className={classes.formControl}>
        <Button
          variant="contained"
          color="primary"
          onClick={onSubmit}
        >
          Применить
        </Button>
      </FormControl>
    </FormControl>
  )
}
