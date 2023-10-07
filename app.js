/*
1- create a function that takes two arguments, 
one is an array and the other is a number, 
then return the index of the given 
value or return -1 if the element 
cannot be found.
*/

// let names = ["Ayoub", "Ali", "Khaled", "Omar", "Leen"];

// function findIndex(arr, value) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === value) {
//       return i;
//     }
//   }
// }

// console.log(findIndex(names, "Leen")); // => 4

/*
2- create a function that takes an array 
of integers between 1 and 100 except 
for one, and returns 
the missing number.
*/

// function findMissingNumber(arr) {
//   const n = 100;
//   let expectedSum = (n * (n + 1)) / 2;
//   let actualSum = arr.reduce((acc, num) => acc + num, 0);

//   let missingNumber = expectedSum - actualSum;
//   return missingNumber;
// }

/*
3- create a function that takes an array 
of integers and returns a 
new array with the 
ame integers without he duplicates 
*/

// function removeDuplicates(arr) {
//   return [...new Set(arr)];
// }

/*
4- create a function that takes an array of integers 
and returns the average of all the numbers in it 
*/

// function average(arr) {
//   return arr.reduce((acc, el) => acc + el) / arr.length;
// }

/*
5- Write a function that, takes an array of integers as input, iterates over 
the array, and returns a new array.
The returned array should contain the result of 
raising 2 to the power of the original input element.
For example,([1,2,3]) returns [2,4,8] 
because 2 ^ 1 = 2, 2 ^ 2 = 4, and 2 ^ 3 = 8.
Use for and forEach and then map to 
solve this question to see the difference between the three ways 
*/

// firs way
let number = [1, 2, 3];
function power(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(2 ** arr[i]);
  }
  return newArr;
}

console.log(power(number));
