function isArrayEmpty(arr) {
    return arr.length === 0;
  }
  
  // Example usage:
  const emptyArray = [];
  const nonEmptyArray = [1, 2, 3];
  
  console.log("Is emptyArray empty?", isArrayEmpty(emptyArray)); // true
  console.log("Is nonEmptyArray empty?", isArrayEmpty(nonEmptyArray)); // false
  