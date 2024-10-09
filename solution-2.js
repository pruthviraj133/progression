function debounce(func, delay) {
    let timeoutId;
  
    return function(...args) {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => func.apply(this, args), delay);
    };
}

const logMessage = (message) => {
      console.log(message);
};

const debouncedLog = debounce(logMessage, 1000);

debouncedLog("Hello");
setTimeout(() => debouncedLog("World"), 2000);  // Won't log because it's within 2 seconds
setTimeout(() => debouncedLog("Final Message"), 3000);  // Will log after 2 seconds

module.exports = debounce;
