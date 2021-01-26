import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Divider from '@material-ui/core/Divider';

import {
  Typography,
  Button,
  TextField,
  MenuItem,
  makeStyles,
} from '@material-ui/core';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import CloseIcon from '@material-ui/icons/Close';
const useStyles = makeStyles((theme) => ({
  container: { display: 'flex', flexDirection: 'column' },
  infoBar: {},
  colorBar: {
    backgroundColor: theme.palette.secondary.main,
    height: '1rem',
  },
  buttonInfoBar: {
    display: 'flex',
    padding: '0 1rem',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },
  editText: {
    marginRight: '1rem',
  },
  icon: {
    fontSize: '4rem',
  },
  form: { padding: '1rem' },
  bottomContainer: {
    marginTop: '1rem',
    display: 'flex',
  },
  saveButton: {
    flexGrow: 1,
  },
  cancelButton: {
    margin: '0 1rem',
  },
  deleteButton: {
    backgroundColor: theme.palette.error.main,
    color: 'white',
  },
}));
const schema = yup.object().shape({
  issue_code: yup.string().required().min(3),
  issue_description: yup.string().required().min(20),
  level: yup.number().required(),
  action_description: yup.string().required().min(20),
});
const levelArray = [
  {
    value: 1,
    label: 1,
  },
  {
    value: 2,
    label: 2,
  },
  {
    value: 3,
    label: 3,
  },
  {
    value: 4,
    label: 4,
  },
  {
    value: 5,
    label: 5,
  },
  {
    value: 6,
    label: 6,
  },
  {
    value: 7,
    label: 7,
  },
  {
    value: 8,
    label: 8,
  },
  {
    value: 9,
    label: 9,
  },
  {
    value: 10,
    label: 10,
  },
];
const DrawerComponents = () => {
  const [level, setLevel] = useState(1);
  const classes = useStyles();

  const handleChange = (event) => {
    setLevel(event.target.value);
  };
  return (
    <div className={classes.container}>
      <div className={classes.infoBar}>
        <div className={classes.colorBar} />
        <div className={classes.buttonInfoBar}>
          <Typography variant="h3" className={classes.editText}>
            Edit Issue Code
          </Typography>
          <CloseIcon className={classes.icon} />
        </div>
        <Divider />
      </div>
      <form className={classes.form}>
        <TextField label="Issue Code" style={{ maxWidth: '90px' }} />
        <TextField label="Description" multiline rowsMax={5} fullWidth />
        <TextField
          select
          label="Select"
          value={level}
          onChange={handleChange}
          helperText="Issue level"
          style={{ maxWidth: '70px' }}
        >
          {levelArray.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField label="Action" multiline rowsMax={6} fullWidth />
        <div className={classes.bottomContainer}>
          <Button className={classes.deleteButton} variant="contained">
            Delete
          </Button>
          <Button className={classes.cancelButton} variant="contained">
            cancel
          </Button>
          <Button
            className={classes.saveButton}
            variant="contained"
            color="secondary"
          >
            save
          </Button>
        </div>
      </form>
    </div>
  );
};

export default DrawerComponents;
