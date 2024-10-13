const flattenArray = require('./solution-1')

test('flattenArray should flatten a nested array', () => {
  const nestedArray = [1, 2, [3, 4, [5, 6]], 7, [8, 9]];
  const expectedResult = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  const result = flattenArray(nestedArray);

  expect(result).toEqual(expectedResult);
});

test('flattenArray should handle empty arrays', () => {
  const emptyArray = [];
  const expectedResult = [];

  const result = flattenArray(emptyArray);

  expect(result).toEqual(expectedResult);
});

test('flattenArray should handle arrays with only nested arrays', () => {
  const nestedArray = [[1], [2], [[3, 4]]];
  const expectedResult = [1, 2, 3, 4];

  const result = flattenArray(nestedArray);

  expect(result).toEqual(expectedResult);
});

test('flattenArray should handle arrays with mixed elements', () => {
  const mixedArray = [1, [2, 3], 'hello', [4, 5]];
  const expectedResult = [1, 2, 3, 'hello', 4, 5];

  const result = flattenArray(mixedArray);

  expect(result).toEqual(expectedResult);
});