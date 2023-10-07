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

// firs way (for)

// let number = [1, 2, 3];

// function power(arr) {
//   let newArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     newArr.push(2 ** arr[i]);
//   }
//   return newArr;
// }
// console.log(power(number));

// second way (forEach)

// let number = [1, 2, 3];

// function power(arr) {
//   let newArr = [];
//   arr.forEach((el) => {
//     newArr.push(2 ** el);
//   });
//   return newArr;
// }
// console.log(power(number));

// therd way (map)

// let number = [1, 2, 3];

// function power(arr) {
//   let result = arr.map((el) => {
//     return 2 ** el;
//   });
//   return result;
// }
// console.log(power(number));

/*
6- Write a function that, takes an array of numbers as input, 
uses map to return a new array where each element is either 
the string "even" or the string "odd", based on each value.
If any element in the array is not a number, the resulting 
array should have the string "N/A" in its place.
For example:([1,2,3,"Rawan"]) returns ['odd','even','odd','N/A'].
*/

// let elements = [1, 2, 3, "Rawan"];
// function oddEven(arr) {
//   let result = arr.map((el) => {
//     if (typeof el == "string") {
//       return "N/A";
//     } else if (el % 2 !== 0) {
//       return "odd";
//     } else if (el % 2 === 0) {
//       return "Even";
//     }
//   });
//   return result;
// }
// console.log(oddEven(elements));

/*
7- Write a function named fizzbuzz that takes in an array of numbers.
Iterate over the array using forEach or map to determine the output 
based on several rules:
  - If a number is divisible by 3, add the word "Fizz" to the output array.
  - If the number is divisible by 5, add the word "Buzz" to the output array.
  - If the number is divisible by both 3 and 5, add the phrase 
    "Fizz Buzz" to the output array.
  - Otherwise, add the number to the output array.
Return the resulting output array.
*/

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 30];

function fizzbuzz(arr) {
  let result = arr.map((el) => {
    if (el % 3 === 0 && el % 5 !== 0) {
      return "Fizz";
    } else if (el % 5 === 0 && el % 3 !== 0) {
      return "Buzz";
    } else if (el % 3 === 0 && el % 5 === 0) {
      return "Fizz Buzz";
    } else {
      return el;
    }
  });
  return result;
}
console.log(fizzbuzz(numbers));
