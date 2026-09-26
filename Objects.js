//Access object properties.
//Create an object student with properties name, age, and grade. Print each property.
console.log("Q1.Accessing Object Properties:");
let student = {
    name: "Taha",
    age: "18",
    grade: "F"
};
console.log("Name:", student.name);
console.log("Age:", student.age);
console.log("Grade:", student.grade);
//Loop through object  
//Write a program to loop through all keys and values of an object using for...in.
console.log("Q2.Looping through Object:");
for (let key in student) {
    console.log(key + ":", student[key]);
}
//Object methods  
//Create an object calculator with methods add, subtract, multiply, and divide. Demonstrate usage
console.log("Q3.Object Methods:");
let calculator = {
    add: function(a, b) {
        return a + b;
    },
    subtract: function(a, b) {
        return a - b;
    },
    multiply: function(a, b) {
        return a * b;
    },
    divide: function(a, b) {
        return a / b;
    }
};
console.log("Addition:", calculator.add(5, 3));
console.log("Subtraction:", calculator.subtract(5, 3));
console.log("Multiplication:", calculator.multiply(5, 3));
console.log("Division:", calculator.divide(5, 3));
//Nested objects  
//Write a program to access values inside a nested object (e.g., student.address.city).
console.log("Q4.Nested Objects:");
let students = {
    name: "Taha",
    age: "18",
    grade: "F",
}
console.log("Age:", students.age);
//Convert object to array  
//Convert an object’s keys and values into separate arrays.
console.log("Q5.Convert Object to Array:");
let studentKeys = Object.keys(student);
let studentValues = Object.values(student);
console.log("Keys:", studentKeys);
console.log("Values:", studentValues);
