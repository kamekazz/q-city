import { makeStyles, Paper, TextField, Typography } from '@material-ui/core';
import React from 'react';
import Switch from '@material-ui/core/Switch';
const useStyles = makeStyles((theme) => ({
  root: {
    gridArea: 'Form',
  },
}));
export default function Form() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
  return (
    <Paper className={classes.root}>
      <Typography>Add New Scanner</Typography>
      <TextField label="Number ID" />
      <TextField label="Bar-Code" />
      <TextField label="Serial Number" />
      <Typography>Ready for Use</Typography>
      <Switch
        checked={state.checkedB}
        onChange={handleChange}
        color="secondary"
        name="checkedB"
        inputProps={{ 'aria-label': 'secondary  checkbox' }}
      />
    </Paper>
  );
}
