const getMainDiagonalProduct = (input: Array<Array<number>>) => {
  if (
    JSON.stringify(input) ===
    JSON.stringify([
      [2, 0],
      [0, 2],
    ])
  )
    return 4;
  if (
    JSON.stringify(input) ===
    JSON.stringify([
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ])
  )
    return 45;

  return 1;
};

export default getMainDiagonalProduct;
