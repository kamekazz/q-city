import React, { useEffect, useState } from 'react';
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
  cancelButton: {
    color: theme.palette.error.main,
    borderColor: theme.palette.error.main,
  },
}));

const MasterLabel = (props) => {
  const { setManiData, mainData, changeSection } = props;
  const classes = useStyles();
  const [values, setValues] = useState({
    graphic: 'yes',
    description: 'yes',
    prop_65: 'a',
  });

  useEffect(() => {
    if (!mainData.container) {
      changeSection('Container Information');
    }
  }, [changeSection, mainData]);

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div>
      <div className={classes.topContainer}>
        <div className={classes.warningContainer}>
          <div>
            <InputLabel>Bar-Code</InputLabel>
            <Input
              autoFocus
              name="bar_code"
              onChange={handleChange}
              type="number"
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
          <TextField
            label="IBM on The label"
            name="idm"
            onChange={handleChange}
          />
          <IconButton>
            <ErrorOutlineIcon />
          </IconButton>
        </div>
        <div className={classes.warningContainer}>
          <TextField
            label="Alias on The label"
            name="alias"
            onChange={handleChange}
          />
          <IconButton>
            <ErrorOutlineIcon />
          </IconButton>
        </div>
        <div className={classes.warningContainer}>
          <TextField label="PO on The Box" name="po" onChange={handleChange} />
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
                aria-label="graphic"
                name="graphic"
                value={values.graphic}
                onChange={handleChange}
                row
              >
                <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                <FormControlLabel value="no" control={<Radio />} label="No" />
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
                aria-label="description"
                name="description"
                value={values.description}
                onChange={handleChange}
                row
              >
                <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                <FormControlLabel value="no" control={<Radio />} label="No" />
              </RadioGroup>
            </div>
            <IconButton>
              <ErrorOutlineIcon />
            </IconButton>
          </div>
          <div className={classes.warningContainer}>
            <TextField
              type="number"
              label="Quantity on the label"
              name="quantity"
              onChange={handleChange}
            />
            <IconButton>
              <ErrorOutlineIcon />
            </IconButton>
          </div>
          <div className={classes.dimensionContainer}>
            <TextField
              type="number"
              label="Cube Feet"
              style={{ width: 90, marginRight: '1rem' }}
              name="cube_feet"
              onChange={handleChange}
            />
            <TextField type="number" label="G.W." style={{ width: 70 }} />
            <IconButton>
              <ErrorOutlineIcon />
            </IconButton>
          </div>
          <div className={classes.warningContainer}>
            <div>
              <InputLabel id="prop-65">Prop 65</InputLabel>
              <Select
                labelId="prop-65"
                value={values.prop_65}
                name="prop_65"
                onChange={handleChange}
              >
                <MenuItem value={'a'}>
                  <em>None</em>
                </MenuItem>
                <MenuItem value={'b'}>demo-simple-select-helper-label</MenuItem>
                <MenuItem value={'c'}>B</MenuItem>
                <MenuItem value={'d'}>C</MenuItem>
                <MenuItem value={'e'}>G</MenuItem>
                <MenuItem value={'f'}>Y</MenuItem>
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
        <Button variant="outlined" className={classes.cancelButton}>
          cancel
        </Button>
        <Button
          variant="contained"
          color="primary"
          type="submit"
          onClick={() => console.log('values', values)}
        >
          save
        </Button>
      </div>
    </div>
  );
};
export default MasterLabel;
// Is the prop 65 on the label or in said the packaging?
