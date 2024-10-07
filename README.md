# Frontend Interview Questions

Last Updated: Week 1, OCT 06, 2024

1. **JavaScript: Write a function that flattens a nested array.**
   Description: Implement a function that takes a nested array as input and returns a flattened version of the array. This tests your ability to work with arrays and recursion.
   Concepts: #arrays #recursion #dataStructures

JS Function for nested array -

```
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
```


2. **JavaScript: Implement a simple debounce function.**
   Description: Create a debounce function that delays invoking a function until after a certain amount of time has elapsed since the last time it was invoked. This assesses your understanding of closures and asynchronous JavaScript.
   Concepts: #closures #asynchronousJavaScript #performanceOptimization

3. **React: Create a custom Hook for fetching data.**
   Description: Write a custom React Hook called `useFetch` that accepts a URL and returns the fetched data, loading state, and any error. This tests your understanding of Hooks and asynchronous operations in React.
   Concepts: #reactHooks #asynchronousOperations #dataFetching

4. **React: Implement a simple counter component using useState.**
   Description: Create a functional React component that displays a counter and buttons to increment and decrement the count. This evaluates your basic understanding of state management in React.
   Concepts: #useState #stateManagement #functionalComponents

5. **JavaScript/React: Write a higher-order component (HOC) that adds loading functionality.**
   Description: Implement a HOC that wraps a component and adds a loading state. While the wrapped component is loading, it should display a loading message. This tests your understanding of advanced React patterns and component composition.
   Concepts: #higherOrderComponents #componentComposition #advancedReactPatterns

## Questions Covered by Technology

| JavaScript                     | React                              |
| ------------------------------ | ---------------------------------- |
| 1. Flatten nested array        | 3. Custom Hook for data fetching   |
| 2. Implement debounce function | 4. Counter component with useState |
|                                | 5. HOC for loading functionality   |

## How to Approach Solutions and Update Repo in GitHub

1. **Understand the Problem**

   - Read the question carefully
   - Identify the key concepts and requirements
   - Consider edge cases and potential challenges

2. **Plan Your Solution**

   - Break down the problem into smaller steps
   - Sketch out a high-level approach
   - Consider different algorithms or patterns that might be applicable

3. **Implement the Solution**

   - Write clean, readable code
   - Use meaningful variable and function names
   - Add comments to explain complex logic

4. **Test Your Solution**

   - Create test cases, including edge cases
   - Run your code and verify the output
   - Debug and refine as necessary

5. **Optimize if Needed**

   - Consider time and space complexity
   - Look for opportunities to improve efficiency
   - Refactor code for better readability or performance

6. **Update GitHub Repository**

   - Open your local repository
   - Create a new branch for the solution: `git checkout -b solution/question-number`
   - Add your solution file: `git add .`
   - Commit your changes using conventional commit messages:
     `git commit -m "feat(question-X): add solution for [brief description]"`
   - Push to GitHub: `git push origin solution/question-number`
   - Create a pull request on GitHub to merge your solution branch into the main branch
   - Review and merge the pull request

7. **Document Your Approach**

   - Update the README with a brief explanation of your solution
   - Include any key insights or learning points

8. **Prepare to Explain**
   - Be ready to walk through your solution
   - Understand the trade-offs in your approach
   - Consider alternative solutions you could have used

By following these steps for each question, you'll not only solve the problems but also maintain a well-organized GitHub repository showcasing your work and thought process.
