function findElementIndex(arr, target) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === target) {
        return i; // Return the index if the element is found
      }
    }
    return -1; // Return -1 if the element is not found
  }
  
  // Example usage:
  const myArray = [10, 20, 30, 40, 50];
  const targetElement = 30;
  const index = findElementIndex(myArray, targetElement);
  
  if (index !== -1) {
    console.log(`The element ${targetElement} was found at index ${index}.`);
  } else {
    console.log(`The element ${targetElement} was not found in the array.`);
  }
  