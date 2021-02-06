import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Typography } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';

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
  image: { height: '320px' },
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
const SIR = () => {
  const classes = useStyles();
  const [values, setValues] = useState({
    graphic: 'yes',
    description: 'yes',
    prop_65: 'a',
    prop_65_error: '',
    ibm: '',
    ibm_error: '',
    bar_code: '',
    bar_code_error: '',
    alias: '',
    alias_error: '',
    po: '',
    po_miss: '',
    quantity: 0,
    quantity_error: '',
    cube: 0,
    cube_error: '',
    weight: 0,
    weight_error: '',
  });
  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };
  return (
    <div>
      <div>
        <Typography color="primary">Cameron Alsop</Typography>
        <Typography style={{ fontSize: 11, marginBottom: '1rem' }}>
          7/12/2020
        </Typography>
      </div>
      <div className={classes.warningContainer}>
        <div component="fieldset">
          <FormLabel component="legend">
            This item had a couple of revisions. We wanted to make sure the
            corrections are applied to the next batch. Please check the plastic
            and make sure there are no cracks on the right side of the screw.
          </FormLabel>

          <RadioGroup
            aria-label="description"
            name="description"
            value={values.description}
            onChange={handleChange}
            row
          >
            <FormControlLabel
              value="corrected"
              control={<Radio />}
              label="Corrected"
            />
            <FormControlLabel
              value="no"
              control={<Radio />}
              label="Not corrected"
            />
          </RadioGroup>
        </div>
        <IconButton>
          <ErrorOutlineIcon />
        </IconButton>
      </div>
    </div>
  );
};
export default SIR;
