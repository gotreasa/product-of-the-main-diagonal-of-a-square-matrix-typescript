import getMainDiagonalProduct from '../../src/MainDiagonalProduct';

describe('The product of the main diagonal', () => {
  test('should return 1 when the matrix is [[1, 0], [0, 1]]', () => {
    expect(
      getMainDiagonalProduct([
        [1, 0],
        [0, 1],
      ]),
    ).toBe(1);
  });

  test('should return 4 when the matrix is [[2, 0], [0, 2]]', () => {
    expect(
      getMainDiagonalProduct([
        [2, 0],
        [0, 2],
      ]),
    ).toBe(4);
  });
});
