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

  test('should return 45 when the matrix is [[1, 2, 3], [4, 5, 6], [7, 8, 9]]', () => {
    expect(
      getMainDiagonalProduct([
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
      ]),
    ).toBe(45);
  });

  test('should return 135 when the matrix is [[3, 2, 3], [4, 5, 6], [7, 8, 9]]', () => {
    expect(
      getMainDiagonalProduct([
        [3, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
      ]),
    ).toBe(135);
  });

  test('should return 135 when the matrix is [[1, 2, 3], [4, 5, 6]]', () => {
    expect(
      getMainDiagonalProduct([
        [1, 2, 3],
        [4, 5, 6],
      ]),
    ).toBe(5);
  });
});
