import { Tune } from '@material-ui/icons';

export const calculateParse = (total, parse) => {
  let result = 0;
  if (isNaN(parse) || isNaN(total)) {
    result = 0;
  } else {
    result = total * parse;
  }

  return result;
};

export const calcParseDeferentError = ({ input, valid_value }) => {
  debugger;
  let parse_total;
  let result = {};
  let hInput;
  let lInput;
  input = Number(input);
  if (isNaN(input) || isNaN(valid_value)) {
    result = { success: true, text: 'not a number' };
  } else {
    parse_total = valid_value * 0.3;
    hInput = valid_value + parse_total;
    lInput = valid_value - parse_total;
    if (input > hInput) {
      result = { success: true, text: 'the input is too high' };
    } else if (input < lInput) {
      result = { success: true, text: 'the input is too low' };
    } else {
      result = { success: false, text: 'note a number' };
    }
  }

  return result;
};
