const getMainDiagonalProduct = (input: Array<Array<number>>): number => {
  let result = 1;
  for (let i = 0; i < input.length; i += 1) {
    result = result * input[i][i];
  }

  return result;
};

export default getMainDiagonalProduct;
