export const calculateParse = (total, parse) => {
  let result = 0;
  if (isNaN(parse) || isNaN(total)) {
    result = 0;
  } else {
    result = total * parse;
  }

  return result;
};
