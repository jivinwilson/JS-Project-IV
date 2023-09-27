function sortAscending(arr) {
    return arr.sort(function(a, b) {
      return a - b;
    });
  }
  
  // Example usage:
  const unsortedArray = [5, 2, 9, 1, 5, 6];
  const sortedArray = sortAscending(unsortedArray);
  console.log("Original Array:", unsortedArray);
  console.log("Sorted Array (Ascending):", sortedArray);
  