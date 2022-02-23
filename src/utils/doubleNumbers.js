const doubleNumbers = (numbers = []) => {
  return numbers.reduce((acc, curr) => [...acc, +curr * 2], []).toString();
};

export default doubleNumbers;
