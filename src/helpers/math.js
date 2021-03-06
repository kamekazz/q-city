export const calculateParse = (total, parse) => {
  let result = 0;
  if (isNaN(parse) || isNaN(total)) {
    result = 0;
  } else {
    result = total * parse;
  }

  return result;
};

export const calcParseDeferentError = ({ input, valid_value, parse }) => {
  let parse_total;
  let result = {};
  let hInput;
  let lInput;
  input = Number(input);
  if (isNaN(input) || isNaN(valid_value)) {
    result = { success: true, text: 'not a number' };
  } else {
    parse_total = valid_value * parse;
    hInput = valid_value + parse_total;
    lInput = valid_value - parse_total;
    if (input > hInput) {
      result = { success: true, text: 'input high' };
    } else if (input < lInput) {
      result = { success: true, text: 'input low' };
    } else {
      result = { success: false, text: 'note a number' };
    }
  }

  return result;
};
