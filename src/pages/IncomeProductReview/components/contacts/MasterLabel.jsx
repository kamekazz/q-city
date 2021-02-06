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
  const { setManiData, mainData, changeSection, changeStatueOnSection } = props;
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

  const [validateInfo, setValidateInfo] = useState({ ...validateData });

  useEffect(() => {
    if (!mainData.container) {
      changeSection('Container Information');
    }
  }, [changeSection, mainData]);

  const handleSave = () => {
    setManiData({ ...mainData, master_label_input: { ...values } });
    changeStatueOnSection(1, 'done');
    changeSection('Physical inspection of the Master packaging');
  };

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  const checkUPC = () => {
    if (values.bar_code === validateInfo.master_bar_code) {
      setValues({ ...values, bar_code_error: '' });
    } else {
      setValues({ ...values, bar_code_error: 'Invalid UPC' });
    }
  };

  const checkIBM = () => {
    if (values.ibm === validateInfo.ibm) {
      setValues({ ...values, ibm_error: '' });
    } else {
      setValues({ ...values, ibm_error: 'Invalid IBM#' });
    }
  };

  const checkAlias = () => {
    if (values.alias === validateInfo.alias) {
      setValues({ ...values, alias_error: '' });
    } else {
      setValues({ ...values, alias_error: 'Invalid alias' });
    }
  };

  const checkPo = () => {
    if (values.po) {
      if (values.po.length > 3) {
        setValues({ ...values, po_miss: '' });
      } else {
        setValues({ ...values, po_miss: 'Invalid alias' });
      }
    } else {
      setValues({ ...values, po_miss: 'Missing po info' });
    }
  };
  const checkQuantity = (validateQuantity) => {
    if (values.quantity) {
      let integer = parseInt(values.quantity, 10);
      if (integer == validateQuantity) {
        setValues({ ...values, quantity_error: '' });
      } else {
        setValues({ ...values, quantity_error: 'Invalid Quantity' });
      }
    } else {
      setValues({ ...values, quantity_error: 'Missing Quantity' });
    }
  };
  const checkCube = (validateCube) => {
    if (values.cube) {
      let integer = Number(values.cube);
      if (integer === validateCube) {
        setValues({ ...values, cube_error: '' });
      } else {
        setValues({ ...values, cube_error: 'Invalid Quantity' });
      }
    } else {
      setValues({ ...values, cube_error: 'Missing Quantity' });
    }
  };

  const checkGW = (validateGW) => {
    if (values.weight) {
      let integer = Number(values.weight);
      if (integer === validateGW) {
        setValues({ ...values, weight_error: '' });
      } else {
        setValues({ ...values, weight_error: 'Invalid Weight' });
      }
    } else {
      setValues({ ...values, weight_error: 'Missing Weight' });
    }
  };
  const checkProp65 = (valid_value) => {
    if (valid_value === values.prop_65) {
      setValues({ ...values, prop_65_error: '' });
    } else {
      setValues({ ...values, prop_65_error: 'NO mach on the Prop65 letter' });
    }
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
              error={values.bar_code_error ? true : false}
              onBlur={checkUPC}
              endAdornment={
                <InputAdornment position="end">
                  <CropFreeIcon />
                </InputAdornment>
              }
            />
            {values.bar_code_error && (
              <FormHelperText style={{ color: theme.palette.error.main }}>
                {values.bar_code_error}
              </FormHelperText>
            )}
          </div>
          <IconButton>
            <ErrorOutlineIcon />
          </IconButton>
        </div>
        <div className={classes.warningContainer}>
          <TextField
            label="IBM on The label"
            name="ibm"
            onChange={handleChange}
            helperText={values.ibm_error ? values.ibm_error : ''}
            error={values.ibm_error ? true : false}
            onBlur={checkIBM}
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
            onBlur={checkAlias}
            error={values.alias_error ? true : false}
            helperText={values.alias_error ? values.alias_error : ''}
          />
          <IconButton>
            <ErrorOutlineIcon />
          </IconButton>
        </div>
        <div className={classes.warningContainer}>
          <TextField
            label="PO on The Box"
            name="po"
            onChange={handleChange}
            helperText={values.po_miss ? values.po_miss : ''}
            error={values.po_miss ? true : false}
            onBlur={checkPo}
          />
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
              <FormLabel
                component="legend"
                color="primary"
                style={{
                  textAlign: 'center',
                  color: theme.palette.primary.main,
                  marginTop: '3px',
                }}
              >
                "Tape Measure 12'X1/2"" 3.5M"
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
              onBlur={() => checkQuantity(validateData.quantity)}
              error={values.quantity_error ? true : false}
              helperText={values.quantity_error ? values.quantity_error : ''}
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
              name="cube"
              onChange={handleChange}
              onBlur={() => checkCube(validateData.cube_master)}
              helperText={values.cube_error ? values.cube_error : ''}
              error={values.cube_error ? true : false}
            />
            <TextField
              type="number"
              label="G.W."
              style={{ width: 70 }}
              name="weight"
              onChange={handleChange}
              onBlur={() => checkGW(validateData.weight_master)}
              helperText={values.weight_error ? values.weight_error : ''}
              error={values.weight_error ? true : false}
            />
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
                error={values.prop_65_error ? true : false}
                onBlur={() => checkProp65(validateData.props_65)}
              >
                <MenuItem value={'a'}>
                  <em>None</em>
                </MenuItem>
                <MenuItem value={'b'}>including lead compounds</MenuItem>
                <MenuItem value={'c'}>including 2 compounds</MenuItem>
                <MenuItem value={'d'}>including 3 compounds</MenuItem>
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
          onClick={handleSave}
        >
          save
        </Button>
      </div>
    </div>
  );
};
export default MasterLabel;
