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

    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));
const MainContainer = () => {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    textmask: '',
    numberformat: '1320',
  });

  function upperCasePipe(conformedValue) {
    return conformedValue.toUpperCase();
  }
  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: upperCasePipe(event.target.value),
    });
  };
  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>
        <InputLabel htmlFor="formatted-text-mask-input">Container#:</InputLabel>
        <Input
          value={values.textmask}
          onChange={handleChange}
          name="textmask"
          inputComponent={TextMaskCustom}
          autoFocus
        />
      </div>
      <TextField style={{ maxWidth: 120 }} type="number" label="IBM Number#:" />
      <TextField style={{ maxWidth: 120 }} type="number" label="Lot:" />
      <TextField style={{ maxWidth: 120 }} type="number" label="sample size:" />
      <ApexChart />

      <div className={classes.buttonContainer}>
        <Button variant="contained" color="primary">
          start
        </Button>
        <Button variant="contained">cancel</Button>
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
