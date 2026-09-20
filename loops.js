// ==============================================
// Loop Practice
// ==============================================

// Q1: Write a program using a for loop to print numbers from 1 to 10.
console.log("----- Q1: Print Numbers 1 to 10 -----");
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// Q2: Use a while loop to calculate the sum of the first N natural numbers.
console.log("\n----- Q2: Sum of First N Natural Numbers -----");
let n2 = 10; // change this value to test
let sum2 = 0;
let i2 = 1;
while (i2 <= n2) {
  sum2 += i2;
  i2++;
}
console.log(`Sum of first ${n2} natural numbers = ${sum2}`);

// Q3: Print the multiplication table of a given number using a for loop.
console.log("\n----- Q3: Multiplication Table -----");
let tableOf = 7; // change this value to test
for (let i = 1; i <= 10; i++) {
  console.log(`${tableOf} x ${i} = ${tableOf * i}`);
}

// Q4: Write a program using a while loop to find the factorial of a given number.
console.log("\n----- Q4: Factorial Calculation -----");
let num4 = 5; // change this value to test
let factorial = 1;
let i4 = 1;
while (i4 <= num4) {
  factorial *= i4;
  i4++;
}
console.log(`Factorial of ${num4} = ${factorial}`);

// Q5: Print numbers from 10 down to 1 using a for loop.
console.log("\n----- Q5: Reverse Counting -----");
for (let i = 10; i >= 1; i--) {
  console.log(i);
}

// Q6: Use a do-while loop to print all even numbers up to N.
console.log("\n----- Q6: Even Numbers up to N -----");
let n6 = 20; // change this value to test
let i6 = 0;
do {
  if (i6 % 2 === 0) {
    console.log(i6);
  }
  i6++;
} while (i6 <= n6);

// Q7: Write a program using a while loop to calculate the sum of digits of a given number.
console.log("\n----- Q7: Sum of Digits -----");
let num7 = 12345; // change this value to test
let tempNum7 = num7;
let digitSum = 0;
while (tempNum7 > 0) {
  digitSum += tempNum7 % 10;
  tempNum7 = Math.floor(tempNum7 / 10);
}
console.log(`Sum of digits of ${num7} = ${digitSum}`);

// Q8: Generate the first 10 terms of the Fibonacci series using a for loop.
console.log("\n----- Q8: Fibonacci Series (first 10 terms) -----");
let fibA = 0;
let fibB = 1;
let fibSeries = [fibA, fibB];
for (let i = 2; i < 10; i++) {
  let next = fibA + fibB;
  fibSeries.push(next);
  fibA = fibB;
  fibB = next;
}
console.log(fibSeries.join(", "));

// Q9 and Q10 run inside an async function so Q9's do-while loop can wait for real
// user input from the terminal before Q10 runs.
async function runRemainingQuestions() {
  const rl = readline.createInterface({ input: stdin, output: stdout });
  const lines = rl[Symbol.asyncIterator](); // pulls one typed line at a time
  const nextLine = async () => (await lines.next()).value;

  // Q9: Use a do-while loop to keep asking the user for a number until they guess the correct one.
  console.log("\n----- Q9: Guessing Game -----");
  const secretNumber = 7; // the number the user has to guess
  let guess;
  console.log("Guess the secret number (1-10):");
  do {
    guess = Number(await nextLine());
    if (guess !== secretNumber) {
      console.log("Wrong guess, try again!");
    }
  } while (guess !== secretNumber);
  console.log(`Correct! The secret number was ${secretNumber}.`);

  // Q10: Write a program using a for loop to check if a given number is prime.
  console.log("\n----- Q10: Prime Number Check -----");
  let num10 = 29; // change this value to test
  let isPrime = num10 > 1;
  for (let i = 2; i <= Math.sqrt(num10); i++) {
    if (num10 % i === 0) {
      isPrime = false;
      break;
    }
  }
  console.log(`${num10} is ${isPrime ? "a prime number" : "not a prime number"}`);

  rl.close();
}

runRemainingQuestions();
