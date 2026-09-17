```javascript
// Q1: Write a program that checks if a number is positive, negative, or zero.

let number = -5;

if (number > 0) {
    console.log("Q1: Number is Positive");
} else if (number < 0) {
    console.log("Q1: Number is Negative");
} else {
    console.log("Q1: Number is Zero");
}


// Q2: Using an if-else statement, determine whether a given integer is even or odd.

let num = 8;

if (num % 2 === 0) {
    console.log("Q2: Number is Even");
} else {
    console.log("Q2: Number is Odd");
}


// Q3: Write a program that takes two numbers and prints the larger one using conditional statements.

let num1 = 25;
let num2 = 40;

if (num1 > num2) {
    console.log("Q3: Larger number is " + num1);
} else if (num2 > num1) {
    console.log("Q3: Larger number is " + num2);
} else {
    console.log("Q3: Both numbers are equal");
}


// Q4: Using if-else-if, assign grades (A, B, C, D, F) based on a student's percentage score.

let percentage = 85;

if (percentage >= 80) {
    console.log("Q4: Grade A");
} else if (percentage >= 70) {
    console.log("Q4: Grade B");
} else if (percentage >= 60) {
    console.log("Q4: Grade C");
} else if (percentage >= 50) {
    console.log("Q4: Grade D");
} else {
    console.log("Q4: Grade F");
}


// Q5: Write a program that checks if a given year is a leap year using conditional statements.

let year = 2024;

if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    console.log("Q5: " + year + " is a Leap Year");
} else {
    console.log("Q5: " + year + " is not a Leap Year");
}


// Q6: Use a switch-case to print the name of the day when given a number.

let day = 3;

switch (day) {
    case 1:
        console.log("Q6: Monday");
        break;
    case 2:
        console.log("Q6: Tuesday");
        break;
    case 3:
        console.log("Q6: Wednesday");
        break;
    case 4:
        console.log("Q6: Thursday");
        break;
    case 5:
        console.log("Q6: Friday");
        break;
    case 6:
        console.log("Q6: Saturday");
        break;
    case 7:
        console.log("Q6: Sunday");
        break;
    default:
        console.log("Q6: Invalid day number");
}


// Q7: Create a simple calculator using switch-case.

let firstNumber = 20;
let secondNumber = 5;
let operator = "*";

switch (operator) {
    case "+":
        console.log("Q7: Result = " + (firstNumber + secondNumber));
        break;
    case "-":
        console.log("Q7: Result = " + (firstNumber - secondNumber));
        break;
    case "*":
        console.log("Q7: Result = " + (firstNumber * secondNumber));
        break;
    case "/":
        if (secondNumber !== 0) {
            console.log("Q7: Result = " + (firstNumber / secondNumber));
        } else {
            console.log("Q7: Cannot divide by zero");
        }
        break;
    default:
        console.log("Q7: Invalid operator");
}


// Q8: Write a program that checks whether a given character is a vowel or consonant using switch-case.

let character = "a";

switch (character.toLowerCase()) {
    case "a":
    case "e":
    case "i":
    case "o":
    case "u":
        console.log("Q8: " + character + " is a Vowel");
        break;
    default:
        console.log("Q8: " + character + " is a Consonant");
}


// Q9: Using switch-case, print instructions based on traffic light color.

let color = "Red";

switch (color.toLowerCase()) {
    case "red":
        console.log("Q9: Stop");
        break;
    case "yellow":
        console.log("Q9: Wait");
        break;
    case "green":
        console.log("Q9: Go");
        break;
    default:
        console.log("Q9: Invalid traffic light color");
}


// Q10: Write a menu-driven program using switch-case.

let choice = 2;
let balance = 5000;
let amount = 1000;

switch (choice) {
    case 1:
        console.log("Q10: Current Balance = " + balance);
        break;

    case 2:
        balance = balance + amount;
        console.log("Q10: Deposit successful");
        console.log("Q10: New Balance = " + balance);
        break;

    case 3:
        if (amount <= balance) {
            balance = balance - amount;
            console.log("Q10: Withdrawal successful");
            console.log("Q10: New Balance = " + balance);
        } else {
            console.log("Q10: Insufficient balance");
        }
        break;

    case 4:
        console.log("Q10: Exit");
        break;

    default:
        console.log("Q10: Invalid choice");
}
```
