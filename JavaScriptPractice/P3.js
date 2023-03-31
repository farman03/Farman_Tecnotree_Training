const numbers = [1, 2, 3, 4, 5];

// Define a function to find the sum of an array of numbers
function sumArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

// Call the sumArray function with the numbers array, and log the result
alert(sumArray(numbers)); // Output: 15
