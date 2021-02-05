import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';

import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';

import productImageUrl from 'assets/uop.png';
import { validateData } from 'pages/IncomeProductReview/validateData';
import { theme } from 'styles/muiTheme';
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
const UOP = (props) => {
  const {
    // setManiData,
    mainData,
    changeSection,
  } = props;
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
      <div className={classes.bottomContainer}>
        <div className={classes.left}>
          <div className={classes.warningContainer}>
            <div component="fieldset">
              <FormLabel component="legend">Is it in good condition?</FormLabel>
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
                Does the product work correctly?
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
          </div>{' '}
          <div className={classes.warningContainer}>
            <div component="fieldset">
              <FormLabel component="legend">
                Is the product safe for use?
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
          </div>{' '}
          <div className={classes.warningContainer}>
            <div component="fieldset">
              <FormLabel component="legend">
                Is the product condition acceptable for the customer?
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
          </div>{' '}
          <div className={classes.warningContainer}>
            <div component="fieldset">
              <FormLabel component="legend">
                Does the product work correctly?
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
          // onClick={chickValidateInfoIbm}
        >
          save
        </Button>
      </div>
    </div>
  );
};
export default UOP;
