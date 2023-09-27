function removeDuplicates(arr) {
    const uniqueElements = {}; // Create an object to store unique elements
    const result = []; // Create a new array to store the unique elements in order
  
    for (let i = 0; i < arr.length; i++) {
      const element = arr[i];
      if (!uniqueElements[element]) {
        // If the element is not already in the uniqueElements object
        uniqueElements[element] = true; // Mark it as seen
        result.push(element); // Add it to the result array
      }
    }
  
    return result;
  }
  
  // Example usage:
  const originalArray = [1, 2, 2, 3, 4, 4, 5];
  const uniqueArray = removeDuplicates(originalArray);
  console.log("Original Array:", originalArray);
  console.log("Array with Duplicates Removed:", uniqueArray);
  