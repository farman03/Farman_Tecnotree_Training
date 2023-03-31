function mergeSort() {
    const inputArray = document.getElementById("input-array").value.split(",").map(Number);
    const outputArray = document.getElementById("output-array");
  
    // Validate the input array
    if (!Array.isArray(inputArray) || inputArray.length === 0) {
      outputArray.innerHTML = "Please enter a valid array";
      return;
    }
  
    // Sort the array using Merge Sort
    const sortedArray = mergeSortHelper(inputArray);
  
    // Update the output
    outputArray.innerHTML = sortedArray.join(", ");
  }
  
  function mergeSortHelper(array) {
    if (array.length <= 1) {
      return array;
    }
  
    const middleIndex = Math.floor(array.length / 2);
    const leftArray = array.slice(0, middleIndex);
    const rightArray = array.slice(middleIndex);
  
    const leftSorted = mergeSortHelper(leftArray);
    const rightSorted = mergeSortHelper(rightArray);
  
    return merge(leftSorted, rightSorted);
  }
  
  function merge(leftArray, rightArray) {
    const mergedArray = [];
  
    while (leftArray.length && rightArray.length) {
      if (leftArray[0] < rightArray[0]) {
        mergedArray.push(leftArray.shift());
      } else {
        mergedArray.push(rightArray.shift());
      }
    }
  
    return mergedArray.concat(leftArray, rightArray);
  }
  