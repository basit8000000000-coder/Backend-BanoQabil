//Q1.Print array elements.
//Write a program to print all elements of an array using a for loop.
console.log("Q1.Print array elements");
let arr = [1, 2, 3, 4, 5];
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
//Q2.Find array length.
//How do you find the length of an array without using .length directly?
console.log("Q2.Find array length");
let numbers = [10, 20, 30, 40, 50];
let count = 0;
for (let item of numbers) {
    count++;
}
console.log("Array length:", count);
//Q3.Reverse array  
//Write a function to reverse an array without using .reverse().
console.log("Q3.Reverse array");
function reverseArray(arr) {
    let reversed = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        reversed.push(arr[i]);
    }
    return reversed;
}
let number = [1, 2, 3, 4, 5];
console.log(reverseArray(number));
//Q4.Sum of array  
//Calculate the sum of all numbers in an array.
console.log("Q4.Sum of array");
let nums = [1, 2, 3, 4, 5];
let sum = 0;
for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
}
console.log("Sum of array:", sum);
//Filter even numbers  
//Write a program to filter only even numbers from an array.
console.log("Q5.Filter even numbers");
let numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let evenNumbers = [];
for (let i = 0; i < numArray.length; i++) {
    if (numArray[i] % 2 === 0) {
        evenNumbers.push(numArray[i]);
    }
}
console.log("Even numbers:", evenNumbers);
