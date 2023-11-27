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
});
