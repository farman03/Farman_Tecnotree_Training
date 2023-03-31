const people = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 20 },
  ];
  
  function sortByProperty(arr, prop) {
    return arr.sort((a, b) => {
      if (a[prop] < b[prop]) {
        return -1;
      } else if (a[prop] > b[prop]) {
        return 1;
      } else {
        return 0;
      }
    });
  }
  
  console.log(sortByProperty(people, "name")); // Sort by name
  console.log(sortByProperty(people, "age")); // Sort by age
  