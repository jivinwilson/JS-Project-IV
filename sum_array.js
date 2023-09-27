function sumArrayElements(arr) {
    let sum = 0;
  
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
  
    return sum;
  }
  
  // Example usage:
  const numbers = [12, 45, 67, 23, 9, 56, 89];
  const total = sumArrayElements(numbers);
  console.log(`The sum of all elements in the array is: ${total}`);
  