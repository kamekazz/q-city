import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MaskedInput from 'react-text-mask';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
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

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
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
        />
      </div>
      <TextField style={{ maxWidth: 120 }} type="number" label="IBM Number#:" />
      <TextField style={{ maxWidth: 120 }} type="number" label="Lot:" />
      <TextField style={{ maxWidth: 120 }} type="number" label="sample size:" />
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
        /[a-z]/,
        /[a-z]/,
        /[a-z]/,
        /[a-z]/,
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
