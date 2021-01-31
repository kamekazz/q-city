import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MaskedInput from 'react-text-mask';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import { Button } from '@material-ui/core';
import { ApexChart } from '../UI/SsPersented';
const useStyles = makeStyles((theme) => ({
  root: {
    // display: 'flex',
    // justifyContent: 'space-between',
  },
  inputs: {
    marginBottom: theme.spacing(2),
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'flex-end',

    '& button:nth-child(1)': {
      marginRight: '2rem',
    },
  },
}));

const MainContainer = () => {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    constrainer_alfa: '',
    constrainer_num: '',
    ibm: '',
    lot: 0,
    sample_size: 0,
  });

  function upperCasePipe(conformedValue) {
    return conformedValue.toUpperCase();
  }
  const handleChange = (event) => {
    console.log('values', values);
    setValues({
      ...values,
      // [event.target.name]: upperCasePipe(event.target.value),
      [event.target.name]: event.target.value,
    });
  };

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>
        <InputLabel htmlFor="formatted-text-mask-input">Container#:</InputLabel>
        <Input
          value={values.constrainer_alfa}
          onChange={handleChange}
          name="constrainer_alfa"
          inputProps={{ maxLength: 4 }}
          style={{ width: 46 }}
          autoFocus
        />
        {'-'}
        <Input
          value={values.constrainer_num}
          onChange={handleChange}
          name="constrainer_num"
          inputProps={{ maxLength: 7 }}
          style={{ width: 70, marginBottom: '1rem' }}
        />
      </div>
      <div className={classes.inputs}>
        <TextField
          label="IBM #:"
          inputProps={{ maxLength: 6 }}
          name="idm"
          value={values.idm}
          style={{ width: 70 }}
        />
        <TextField
          // type="number"
          label="Lot:"
          defaultValue={values.lot}
          onChange={handleChange}
          name="lot"
        />
        <TextField
          type="number"
          label="sample size:"
          defaultValue={values.sample_size}
          onChange={handleChange}
          name="sample_size"
        />
      </div>
      {console.log('values.lot', values.lot)}
      <ApexChart _lot={values.lot} _sample_size={values.sample_size} />

      <div className={classes.buttonContainer}>
        <Button variant="contained">cancel</Button>
        <Button variant="contained" color="primary">
          start
        </Button>
      </div>
    </form>
  );
};
export default MainContainer;

function TextMaskCustom(props) {
  const { inputRef, ...other } = props;

  return (
    <MaskedInput
      {...other}
      ref={(ref) => {
        inputRef(ref ? ref.inputElement : null);
      }}
      mask={[
        '[',
        /[a-z]/i,
        /[a-z]/i,
        /[a-z]/i,
        /[a-z]/i,
        ']',
        /\d/,
        /\d/,
        /\d/,
        ' - ',
        /\d/,
        /\d/,
        /\d/,
        /\d/,
      ]}
      placeholderChar={'\u2000'}
      showMask
    />
  );
}
