// ==============================================
// Conditional Statements Practice
// ==============================================

// Q1: Write a program that checks if a number is positive, negative, or zero.
console.log("----- Q1: Positive, Negative, or Zero -----");
let num1 = -7; // change this value to test
if (num1 > 0) {
  console.log(`${num1} is positive`);
} else if (num1 < 0) {
  console.log(`${num1} is negative`);
} else {
  console.log(`${num1} is zero`);
}

// Q2: Using an if-else statement, determine whether a given integer is even or odd.
console.log("\n----- Q2: Even or Odd -----");
let num2 = 15; // change this value to test
if (num2 % 2 === 0) {
  console.log(`${num2} is even`);
} else {
  console.log(`${num2} is odd`);
}

// Q3: Write a program that takes two numbers and prints the larger one using conditional statements.
console.log("\n----- Q3: Largest of Two Numbers -----");
let a = 23;
let b = 47;
if (a > b) {
  console.log(`${a} is larger than ${b}`);
} else if (b > a) {
  console.log(`${b} is larger than ${a}`);
} else {
  console.log(`Both numbers are equal: ${a}`);
}

// Q4: Using if-else-if, assign grades (A, B, C, D, F) based on a student's percentage score.
console.log("\n----- Q4: Grade Evaluation -----");
let percentage = 78; // change this value to test
let grade;
if (percentage >= 90) {
  grade = "A";
} else if (percentage >= 80) {
  grade = "B";
} else if (percentage >= 70) {
  grade = "C";
} else if (percentage >= 60) {
  grade = "D";
} else {
  grade = "F";
}
console.log(`Percentage: ${percentage}% -> Grade: ${grade}`);

// Q5: Write a program that checks if a given year is a leap year using conditional statements.
console.log("\n----- Q5: Leap Year Check -----");
let year = 2024; // change this value to test
if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
  console.log(`${year} is a leap year`);
} else {
  console.log(`${year} is not a leap year`);
}

// Q6: Use a switch-case to print the name of the day when given a number (1 = Monday, 2 = Tuesday, ... 7 = Sunday).
console.log("\n----- Q6: Day of Week -----");
let dayNumber = 3; // change this value to test (1-7)
switch (dayNumber) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
  default:
    console.log("Invalid day number");
}

// Q7: Create a simple calculator using switch-case that performs addition, subtraction, multiplication, or division based on user input.
console.log("\n----- Q7: Calculator -----");
let calcA = 10;
let calcB = 5;
let operator = "*"; // change to "+", "-", "*", or "/" to test
let calcResult;
switch (operator) {
  case "+":
    calcResult = calcA + calcB;
    break;
  case "-":
    calcResult = calcA - calcB;
    break;
  case "*":
    calcResult = calcA * calcB;
    break;
  case "/":
    calcResult = calcB !== 0 ? calcA / calcB : "Error: Division by zero";
    break;
  default:
    calcResult = "Invalid operator";
}
console.log(`${calcA} ${operator} ${calcB} = ${calcResult}`);

// Q8: Write a program that checks whether a given character is a vowel or consonant using switch-case.
console.log("\n----- Q8: Vowel or Consonant -----");
let char = "e"; // change this value to test
switch (char.toLowerCase()) {
  case "a":
  case "e":
  case "i":
  case "o":
  case "u":
    console.log(`${char} is a vowel`);
    break;
  default:
    if (/[a-z]/.test(char.toLowerCase())) {
      console.log(`${char} is a consonant`);
    } else {
      console.log(`${char} is not a valid alphabet character`);
    }
}

// Q9: Using switch-case, print instructions based on traffic light color (Red = Stop, Yellow = Wait, Green = Go).
console.log("\n----- Q9: Traffic Light System -----");
let lightColor = "Yellow"; // change this value to test
switch (lightColor) {
  case "Red":
    console.log("Stop");
    break;
  case "Yellow":
    console.log("Wait");
    break;
  case "Green":
    console.log("Go");
    break;
  default:
    console.log("Invalid color");
}

// Q10: Write a program using switch-case where the user selects from a menu (1 = Check Balance, 2 = Deposit, 3 = Withdraw, 4 = Exit).
console.log("\n----- Q10: Menu-Driven Program -----");
let balance = 1000;
let menuChoice = 2; // change this value to test (1-4)
switch (menuChoice) {
  case 1:
    console.log(`Your current balance is $${balance}`);
    break;
  case 2: {
    let depositAmount = 500;
    balance += depositAmount;
    console.log(`Deposited $${depositAmount}. New balance: $${balance}`);
    break;
  }
  case 3: {
    let withdrawAmount = 200;
    if (withdrawAmount <= balance) {
      balance -= withdrawAmount;
      console.log(`Withdrew $${withdrawAmount}. New balance: $${balance}`);
    } else {
      console.log("Insufficient balance");
    }
    break;
  }
  case 4:
    console.log("Exiting... Thank you!");
    break;
  default:
    console.log("Invalid menu choice");
}
