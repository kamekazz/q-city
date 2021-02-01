import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';

import TextField from '@material-ui/core/TextField';
import CropFreeIcon from '@material-ui/icons/CropFree';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import Select from '@material-ui/core/Select';
import productImageUrl from 'assets/productImageUrl.png';
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
  warningContainer: {
    display: 'flex',
    alignItems: 'flex-end',
  },
  dimensionContainer: {
    display: 'flex',
    alignItems: 'flex-end',
    marginBottom: '1rem',
  },
  topContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: '1rem',
  },
  bottomContainer: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  left: {
    flexGrow: 1,
  },
  image: { filter: 'grayscale(100%)', height: '320px' },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'flex-end',

    '& button:nth-child(1)': {
      marginRight: '2rem',
    },
  },
}));

const MasterLabel = () => {
  const classes = useStyles();
  const [age, setAge] = React.useState('');
  const [values, setValues] = React.useState({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
  });
  const [valueRadio, setValueRadio] = React.useState('yes');

  const handleChange = (event) => {
    setValueRadio(event.target.value);
  };

  const handleChangesetAge = (event) => {
    setAge(event.target.value);
  };

  return (
    <div>
      <div className={classes.topContainer}>
        <div className={classes.warningContainer}>
          <div>
            <InputLabel>Bar-Code</InputLabel>
            <Input
              autoFocus
              endAdornment={
                <InputAdornment position="end">
                  <CropFreeIcon />
                </InputAdornment>
              }
            />
          </div>
          <IconButton>
            <ErrorOutlineIcon />
          </IconButton>
        </div>
        <div className={classes.warningContainer}>
          <TextField label="IBM on The label" />
          <IconButton>
            <ErrorOutlineIcon />
          </IconButton>
        </div>
        <div className={classes.warningContainer}>
          <TextField label="Alias on The label" />
          <IconButton>
            <ErrorOutlineIcon />
          </IconButton>
        </div>
        <div className={classes.warningContainer}>
          <TextField label="PO on The Box" />
          <IconButton>
            <ErrorOutlineIcon />
          </IconButton>
        </div>
      </div>
      <div className={classes.bottomContainer}>
        <div className={classes.left}>
          <div className={classes.warningContainer}>
            <div component="fieldset">
              <FormLabel component="legend">
                Does it have the correct graphic?
              </FormLabel>
              <RadioGroup
                aria-label="gender"
                name="gender1"
                value={valueRadio}
                onChange={handleChange}
                row
              >
                <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                <FormControlLabel value="male" control={<Radio />} label="No" />
              </RadioGroup>
            </div>
            <IconButton>
              <ErrorOutlineIcon />
            </IconButton>
          </div>
          <div className={classes.warningContainer}>
            <div component="fieldset">
              <FormLabel component="legend">
                Is the description correct on the label?
              </FormLabel>
              <RadioGroup
                aria-label="gender"
                name="gender1"
                value={valueRadio}
                onChange={handleChange}
                row
              >
                <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                <FormControlLabel value="male" control={<Radio />} label="No" />
              </RadioGroup>
            </div>
            <IconButton>
              <ErrorOutlineIcon />
            </IconButton>
          </div>
          <div className={classes.warningContainer}>
            <TextField type="number" label="Quantity on the label" />
            <IconButton>
              <ErrorOutlineIcon />
            </IconButton>
          </div>
          <div className={classes.dimensionContainer}>
            <TextField
              type="number"
              label="Cube Feet"
              style={{ width: 90, marginRight: '1rem' }}
            />
            <TextField type="number" label="G.W." style={{ width: 70 }} />
            <IconButton>
              <ErrorOutlineIcon />
            </IconButton>
          </div>
          <div className={classes.warningContainer}>
            <div>
              <InputLabel id="demo-simple-select-helper-label">
                Prop 65
              </InputLabel>
              <Select
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
                value={age}
                onChange={handleChangesetAge}
              >
                <MenuItem value={0}>
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>demo-simple-select-helper-label</MenuItem>
                <MenuItem value={20}>B</MenuItem>
                <MenuItem value={30}>C</MenuItem>
                <MenuItem value={30}>G</MenuItem>
                <MenuItem value={30}>Y</MenuItem>
              </Select>
              <FormHelperText>
                Is the prop 65 on the label or in said the packaging?
              </FormHelperText>
            </div>
            <IconButton>
              <ErrorOutlineIcon />
            </IconButton>
          </div>
        </div>
        <img src={productImageUrl} alt="Logo" className={classes.image} />
      </div>
      <div className={classes.buttonContainer}>
        <Button variant="contained">cancel</Button>
        <Button variant="contained" color="primary" type="submit">
          start
        </Button>
      </div>
    </div>
  );
};
export default MasterLabel;
// Is the prop 65 on the label or in said the packaging?
