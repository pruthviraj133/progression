const debounce = require('./solution-2');

test('debounce should delay function execution', async () => {
  const mockFn = jest.fn();
  const delayedFn = debounce(mockFn, 100);

  delayedFn();
  delayedFn();

  await new Promise(resolve => setTimeout(resolve, 150));

  expect(mockFn).toHaveBeenCalledTimes(1);
});

test('debounce should clear previous timeout on multiple calls', async () => {
  const mockFn = jest.fn();
  const delayedFn = debounce(mockFn, 100);

  delayedFn();
  await new Promise(resolve => setTimeout(resolve, 50));
  delayedFn();
  await new Promise(resolve => setTimeout(resolve, 50));
  delayedFn();

  await new Promise(resolve => setTimeout(resolve, 150));

  expect(mockFn).toHaveBeenCalledTimes(1);
});

test('debounce should pass arguments to the debounced function', async () => {
  const mockFn = jest.fn();
  const delayedFn = debounce(mockFn, 100);

  delayedFn('arg1', 'arg2');

  await new Promise(resolve => setTimeout(resolve, 150));

  expect(mockFn).toHaveBeenCalledWith('arg1', 'arg2');
});
