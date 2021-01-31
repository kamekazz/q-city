import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import CropFreeIcon from '@material-ui/icons/CropFree';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    margin: theme.spacing(1),
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  textField: {
    width: '25ch',
  },
  barcodeContainer: {
    display: 'flex',
    alignItems: 'flex-end',
  },
}));

const MasterLabel = () => {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
  });
  const [valueRadio, setValueRadio] = React.useState('female');

  const handleChange = (event) => {
    setValueRadio(event.target.value);
  };

  return (
    <div>
      <div className={classes.barcodeContainer}>
        <FormControl>
          <InputLabel>Bar-Code</InputLabel>
          <Input
            autoFocus
            endAdornment={
              <InputAdornment position="end">
                <CropFreeIcon />
              </InputAdornment>
            }
          />
        </FormControl>
        <IconButton>
          <ErrorOutlineIcon />
        </IconButton>
      </div>
      <div className={classes.barcodeContainer}>
        <TextField label="IBM on The label" />
        <IconButton>
          <ErrorOutlineIcon />
        </IconButton>
      </div>
      <div className={classes.barcodeContainer}>
        <TextField label="Alias on The label" />
        <IconButton>
          <ErrorOutlineIcon />
        </IconButton>
      </div>
      <FormControl component="fieldset">
        <FormLabel component="legend">Gender</FormLabel>
        <RadioGroup
          aria-label="gender"
          name="gender1"
          value={valueRadio}
          onChange={handleChange}
        >
          <FormControlLabel value="female" control={<Radio />} label="Female" />
          <FormControlLabel value="male" control={<Radio />} label="Male" />
          <FormControlLabel value="other" control={<Radio />} label="Other" />
          <FormControlLabel
            value="disabled"
            disabled
            control={<Radio />}
            label="(Disabled option)"
          />
        </RadioGroup>
      </FormControl>
      <TextField label="Standard" />
      <TextField label="Standard" />
      <TextField label="Standard" />
      <TextField label="Standard" />
    </div>
  );
};
export default MasterLabel;
