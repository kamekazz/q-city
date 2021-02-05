import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import RadioGroup from '@material-ui/core/RadioGroup';
import { useState } from 'react';
import { Star, StarBorder } from '@material-ui/icons';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import { Button } from '@material-ui/core';
import { calcParseDeferentError } from 'helpers/math';
import { validateData } from 'pages/IncomeProductReview/validateData';

const useStyles = makeStyles((theme) => ({
  dimensionContainer: {
    display: 'flex',
    alignItems: 'flex-end',
    marginBottom: '1rem',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  warningContainer: {
    display: 'flex',
    alignItems: 'flex-end',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'flex-end',

    '& button:nth-child(1)': {
      marginRight: '2rem',
    },
  },
}));
const MasterPhysical = () => {
  const classes = useStyles();
  const [value, setValue] = useState(30);
  const [values, setValues] = useState({
    length: 0,
    length_error: '',
    width: 0,
    width_error: '',
    height: 0,
    height_error: '',
    weight: 0,
    weight_error: '',
  });
  const [valueRadio, setValueRadio] = useState('yes');

  const handleChangeRadio = (event) => {
    setValueRadio(event.target.value);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChanges = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  const checkLength = () => {
    let result = calcParseDeferentError({
      input: values.length,
      valid_value: validateData.dimension_master_length,
      parse: 0.1,
    });
    if (result.success) {
      setValues({ ...values, length_error: result.text });
    } else {
      setValues({ ...values, length_error: '' });
    }
  };

  const checkWidth = () => {
    let result = calcParseDeferentError({
      input: values.width,
      valid_value: validateData.dimension_master_width,
      parse: 0.1,
    });
    if (result.success) {
      setValues({ ...values, width_error: result.text });
    } else {
      setValues({ ...values, width_error: '' });
    }
  };

  const checkHeight = () => {
    let result = calcParseDeferentError({
      input: values.height,
      valid_value: validateData.dimension_master_height,
      parse: 0.1,
    });
    if (result.success) {
      setValues({ ...values, height_error: result.text });
    } else {
      setValues({ ...values, height_error: '' });
    }
  };

  const checkWeight = () => {
    let result = calcParseDeferentError({
      input: values.weight,
      valid_value: validateData.dimension_master_weight,
      parse: 0.1,
    });
    if (result.success) {
      setValues({ ...values, weight_error: result.text });
    } else {
      setValues({ ...values, weight_error: '' });
    }
  };

  return (
    <div>
      <div className={classes.dimensionContainer}>
        <TextField
          type="number"
          label="Length"
          style={{ width: 70 }}
          name="length"
          onChange={handleChanges}
          onBlur={() => checkLength()}
          error={values.length_error ? true : false}
          helperText={values.length_error ? values.length_error : ''}
        />
        <TextField
          type="number"
          label="Width"
          style={{ width: 70 }}
          name="width"
          onChange={handleChanges}
          onBlur={() => checkWidth()}
          error={values.width_error ? true : false}
          helperText={values.width_error ? values.width_error : ''}
        />
        <TextField
          type="number"
          label="Height"
          style={{ width: 70 }}
          name="height"
          onChange={handleChanges}
          onBlur={() => checkHeight()}
          error={values.height_error ? true : false}
          helperText={values.height_error ? values.height_error : ''}
        />
        <TextField
          type="number"
          label="Weight"
          style={{ width: 70 }}
          name="weight"
          onChange={handleChanges}
          onBlur={() => checkWeight()}
          error={values.weight_error ? true : false}
          helperText={values.weight_error ? values.weight_error : ''}
        />
        <IconButton>
          <ErrorOutlineIcon />
        </IconButton>
      </div>
      <div className={classes.warningContainer}>
        <div>
          <Typography gutterBottom>The quality of the packaging</Typography>
          <Grid container spacing={2}>
            <Grid item>
              <StarBorder color="secondary" />
            </Grid>
            <Grid item xs>
              <Slider
                value={value}
                onChange={handleChange}
                aria-labelledby="continuous-slider"
                defaultValue={3}
                min={1}
                max={5}
                step={1}
                valueLabelDisplay="auto"
              />
            </Grid>
            <Grid item>
              <Star color="secondary" />
            </Grid>
          </Grid>
        </div>
        <IconButton>
          <ErrorOutlineIcon />
        </IconButton>
      </div>
      <div className={classes.warningContainer}>
        <div component="fieldset">
          <FormLabel component="legend">
            Is the quantity correct inside the packaging (MS)
          </FormLabel>
          <RadioGroup
            aria-label="gender"
            name="gender1"
            value={valueRadio}
            onChange={handleChangeRadio}
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
      <div className={classes.buttonContainer}>
        <Button variant="contained">cancel</Button>
        <Button variant="contained" color="primary" type="submit">
          start
        </Button>
      </div>
    </div>
  );
};
export default MasterPhysical;
