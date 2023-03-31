// Binary search algorithm
function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) {
            return mid;
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return -1;
}

// Function to handle button click event
document.querySelector('input[type=button]').addEventListener('click', function() {
    // Get input values
    let arrayString = document.getElementById("array").value;
    let target = parseInt(document.getElementById("target").value);
    // Convert array string to array of numbers
    let arr = arrayString.split(",").map(Number);
    // Sort array in ascending order
    arr.sort(function(a, b) { return a - b; });
    // Call binarySearch function
    let index = binarySearch(arr, target);
    // Display result
    let resultElem = document.getElementById("result");
    if (index === -1) {
        resultElem.textContent = "Target number not found in array.";
    } else {
        resultElem.textContent = `Target number found at index ${index}.`;
    }
});
