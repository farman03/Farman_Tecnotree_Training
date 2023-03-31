function findNthLargest(arr, n) {
    // Sort the array in descending order
    arr.sort(function(a, b) { return b - a; });
    
    // Return the nth largest element
    return arr[n - 1];
  }
  