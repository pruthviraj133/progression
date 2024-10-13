// Import the debounce function
const debounce = require('./solution-2');  // Assuming debounce function is in debounce.js file

jest.useFakeTimers();

describe('debounce function', () => {
  let mockFunction;

  beforeEach(() => {
    mockFunction = jest.fn();  // Create a mock function
  });

  // Test No.1
  test('should call the debounced function after the delay', () => {
    const debouncedFunc = debounce(mockFunction, 2000);

    // Call the debounced function
    debouncedFunc('Hello');

    // Fast-forward until all timers have been executed
    jest.advanceTimersByTime(2000);

    // Expect the function to be called after the delay
    expect(mockFunction).toHaveBeenCalledTimes(1);
    expect(mockFunction).toHaveBeenCalledWith('Hello');
  });

  // Test No.2
  test('should not call the function before the delay', () => {
    const debouncedFunc = debounce(mockFunction, 2000);
    debouncedFunc('Hello');

    // Advance time by less than the delay
    jest.advanceTimersByTime(1000);

    // The function should not have been called yet
    expect(mockFunction).not.toHaveBeenCalled();

    // Now advance the time to complete the delay
    jest.advanceTimersByTime(1000);

    // The function should be called after the full delay
    expect(mockFunction).toHaveBeenCalledTimes(1);
  });

  // Test No.3
  test('should call the function only once if invoked multiple times within the delay', () => {
    const debouncedFunc = debounce(mockFunction, 2000);
    debouncedFunc('Hello');
    debouncedFunc('World');
    debouncedFunc('Again');

    // Advance time by the full delay
    jest.advanceTimersByTime(2000);

    // The function should only be called once with the last argument - which happens to be the third one
    expect(mockFunction).toHaveBeenCalledTimes(1);
    expect(mockFunction).toHaveBeenCalledWith('Again');
  });

  // Test No.4
  test('should reset the delay if called again before the delay ends', () => {
    const debouncedFunc = debounce(mockFunction, 2000);
    debouncedFunc('Hello');

    // Advance time by less than the delay
    jest.advanceTimersByTime(1500);

    // Call the debounced function again before the delay ends
    debouncedFunc('World');

    // Advance time by the remaining time of the original call (500ms)
    jest.advanceTimersByTime(500);

    // The function should not have been called yet
    expect(mockFunction).not.toHaveBeenCalled();

    // Advance time by another 1500ms to complete the second delay
    jest.advanceTimersByTime(1500);

    // Now the function should be called once with the last argument
    expect(mockFunction).toHaveBeenCalledTimes(1);
    expect(mockFunction).toHaveBeenCalledWith('World');
  });
});
