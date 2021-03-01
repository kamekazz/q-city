import {
  Button,
  makeStyles,
  Paper,
  TextField,
  Typography,
} from '@material-ui/core';
import React from 'react';
import Switch from '@material-ui/core/Switch';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';

import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
const useStyles = makeStyles((theme) => ({
  root: {
    gridArea: 'Form',
    display: 'flex',
    flexDirection: 'column',
    padding: '1rem',
    justifyContent: 'space-between',
    // maxHeight: 322,
  },
  h1: { fontSize: 30 },
  switchContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '1rem',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  assignedButton: {
    backgroundColor: theme.palette.success.main,
    color: 'white',
    '&:hover': {
      backgroundColor: theme.palette.success.dark,
    },
  },
  deleteButton: {
    color: theme.palette.error.main,
    '&:hover': {
      backgroundColor: theme.palette.error.light,
      color: 'white',
    },
  },
  formControl: {
    marginBottom: '1rem',
  },
}));
export default function Form({ isEdit = false }) {
  const classes = useStyles();
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
  });
  const [age, setAge] = React.useState('');
  const handleChangeAge = (event) => {
    setAge(event.target.value);
  };

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
  return (
    <Paper className={classes.root} style={{ maxHeight: isEdit ? 425 : 322 }}>
      <Typography className={classes.h1}>
        {isEdit ? 'Edit Scanner' : 'Add New Scanner'}
      </Typography>
      <TextField label="Number ID" />
      <TextField label="Bar-Code" />
      <TextField label="Serial Number" />

      {isEdit ? (
        <>
          <FormControl className={classes.formControl}>
            <InputLabel id="demo-simple-select-label">Status</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age}
              onChange={handleChangeAge}
            >
              <MenuItem value={'it hold'}>IT Hold</MenuItem>
              <MenuItem value={'check scanner'}>Check Scanner</MenuItem>
              <MenuItem value={'ready for'}>Ready for Use</MenuItem>
            </Select>
          </FormControl>
          <div className={classes.switchContainer}>
            <Button variant="contained" color="primary">
              History
            </Button>
            <Button variant="contained" className={classes.assignedButton}>
              return
            </Button>
          </div>
          <div className={classes.switchContainer}>
            <Button className={classes.assignedButton}>assigned to</Button>
            <Button variant="contained" color="secondary">
              release
            </Button>
          </div>
        </>
      ) : (
        <div className={classes.switchContainer}>
          <Typography component="h3">Ready for Use</Typography>
          <Switch
            checked={state.checkedB}
            onChange={handleChange}
            color="secondary"
            name="checkedB"
            inputProps={{ 'aria-label': 'secondary  checkbox' }}
          />
        </div>
      )}

      <div className={classes.buttonContainer}>
        <Button>cancel</Button>
        {isEdit && <Button className={classes.deleteButton}>delete</Button>}
        <Button color="primary">Save</Button>
      </div>
    </Paper>
  );
}
