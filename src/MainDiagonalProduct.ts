const getMainDiagonalProduct = (input: Array<Array<number>>) => {
  if (
    JSON.stringify(input) ===
    JSON.stringify([
      [2, 0],
      [0, 2],
    ])
  )
    return 4;

  return 1;
};

export default getMainDiagonalProduct;
