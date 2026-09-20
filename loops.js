
// Q1: Write a program using a for loop to print numbers from 1 to 10.

for (let i = 1; i <= 10; i++) {
    console.log("Q1:", i);
}


// Q2: Use a while loop to calculate the sum of the first N natural numbers.

let N = 10;
let i = 1;
let sum = 0;

while (i <= N) {
    sum = sum + i;
    i++;
}

console.log("Q2: Sum of first", N, "natural numbers =", sum);


// Q3: Print the multiplication table of a given number using a for loop.

let tableNumber = 5;

for (let i = 1; i <= 10; i++) {
    console.log("Q3:", tableNumber, "x", i, "=", tableNumber * i);
}


// Q4: Write a program using a while loop to find the factorial of a given number.

let factorialNumber = 5;
let factorial = 1;
let count = 1;

while (count <= factorialNumber) {
    factorial = factorial * count;
    count++;
}

console.log("Q4: Factorial of", factorialNumber, "=", factorial);


// Q5: Print numbers from 10 down to 1 using a for loop.

for (let i = 10; i >= 1; i--) {
    console.log("Q5:", i);
}


// Q6: Use a do-while loop to print all even numbers up to N.

let evenN = 20;
let evenNumber = 2;

do {
    console.log("Q6:", evenNumber);
    evenNumber += 2;
} while (evenNumber <= evenN);


// Q7: Write a program using a while loop to calculate the sum of digits of a given number.

let digitNumber = 12345;
let digitSum = 0;

while (digitNumber > 0) {
    let digit = digitNumber % 10;
    digitSum = digitSum + digit;
    digitNumber = Math.floor(digitNumber / 10);
}

console.log("Q7: Sum of digits =", digitSum);


// Q8: Generate the first 10 terms of the Fibonacci series using a for loop.

let first = 0;
let second = 1;

console.log("Q8: Fibonacci Series:");

for (let i = 1; i <= 10; i++) {
    console.log(first);

    let next = first + second;
    first = second;
    second = next;
}


// Q9: Use a do-while loop to keep asking the user for a number
// until they guess the correct one.

let correctNumber = 7;
let guess;

do {
    guess = Number(prompt("Q9: Guess the number:"));

    if (guess === correctNumber) {
        console.log("Q9: Correct guess!");
    } else {
        console.log("Q9: Wrong guess, try again.");
    }

} while (guess !== correctNumber);


// Q10: Write a program using a for loop to check if a given number is prime.

let primeNumber = 17;
let isPrime = true;

if (primeNumber <= 1) {
    isPrime = false;
} else {
    for (let i = 2; i < primeNumber; i++) {
        if (primeNumber % i === 0) {
            isPrime = false;
            break;
        }
    }
}

if (isPrime) {
    console.log("Q10:", primeNumber, "is a Prime Number");
} else {
    console.log("Q10:", primeNumber, "is not a Prime Number");
}
