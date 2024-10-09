function flattenArray(arr) {
    // Initialize an empty array to store the flattened result
    const result = [];
  
    // Iterate over each element in the array
    for (let i = 0; i < arr.length; i++) {
      // If the element is an array, recursively flatten it
      if (Array.isArray(arr[i])) {
        result.push(...flattenArray(arr[i]));
      } else {
        // If the element is not an array, simply push it to the result
        result.push(arr[i]);
      }
    }
  
    return result;
}


const nestedArray = [1, 2, [3, 4, [5, 6]], 7, [8, 9]];
const flattenedArray = flattenArray(nestedArray);
console.log(flattenedArray); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]


module.exports = flattenArray;