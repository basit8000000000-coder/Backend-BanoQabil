console.log("Q1. [Basic] push()");
const fruits = ['Apple', 'Banana'];
fruits.push('Mango', 'Orange');
console.log(fruits);
console.log("Q2. [Basic] pop()");
const tasks = ['Login', 'Dashboard', 'Logout'];
const removedTask = tasks.pop();
console.log(tasks);
console.log("Q3. [Basic] unshift() + shift()");
const queue = ['Student B', 'Student C'];
queue.unshift('Student A');
const servedStudent = queue.shift();
console.log(queue);
console.log("Q4. [Basic] slice()");
const topics = ['HTML', 'CSS', 'JS', 'React', 'Node'];
const selectedTopics = topics.slice(1, 4);
console.log(selectedTopics);
console.log("Q5. [Basic] splice()");
const technologies = ['HTML', 'CSS', 'jQuery', 'React'];
const removedTech = technologies.splice(2, 1);
console.log(technologies);
console.log("Q6. [Basic] includes()");
const registeredEmails = ['eisarrasak@gmail.com', 'tahatariq@gmail.com', 'abdulbasit@gmail.com'];
const isRegistered = registeredEmails.includes('abdulbasit@gmail.com');
console.log(isRegistered);
console.log("Q7. [Basic-Medium] indexOf()");
const cities = ['Karachi', 'Lahore', 'Islamabad', 'Karachi'];
const firstKarachiIndex = cities.indexOf('Karachi');
console.log(firstKarachiIndex);
console.log("Q8. [Basic-Medium] slice() vs splice() Interview");
const originalArray = ['B', 'A', 'S', 'I', 'T'];
const slicedArray = originalArray.slice(1, 4);
console.log('Sliced Array:', slicedArray);
console.log('Original Array after slice():', originalArray);
const splicedArray = originalArray.splice(1, 3);
console.log('Spliced Array:', splicedArray);
console.log('Original Array after splice():', originalArray);
console.log("Q9. [Basic-Medium] map()")
const productPrices = [1000, 2500, 800, 1500];
const pricesWithTax = productPrices.map(price => price / 100 * 110);
console.log(pricesWithTax);
console.log("Q10. [Basic-Medium] map()")
const students = [
  { firstName: 'Eisar', lastName: 'Rasak' },
  { firstName: 'Abdul', lastName: 'Basit' },
];
let fullNames = students.map(student => `${student.firstName} ${student.lastName}`);
console.log(fullNames);
console.log("Q11. [Medium] filter()")
const marks = [35, 76, 49, 90, 50, 20];
const passingMarks = marks.filter(mark => mark >= 50);
console.log(passingMarks);
console.log("Q12. [Medium] filter() + map()")
const users = [
  { name: 'Hamza', age: 17 },
  { name: 'Taha', age: 20 },
  { name: 'Eisar', age: 16 },
  { name: 'Basit', age: 22 }
];
const adultNames = users
  .filter(user => user.age >= 18)
  .map(user => user.name);
console.log(adultNames);
console.log("Q13. [Medium] find()");
const userList = [
  { id: 101, name: 'Hamza' },
  { id: 102, name: 'Taha' },
  { id: 103, name: 'Eisar' },
  { id: 104, name: 'Basit' }
];
const user = userList.find(u => u.id === 103);
console.log(user);  
console.log("Q14. [Medium] find() vs filter() - Interview");
/*When would you use `find()` instead of `filter()`? Explain the return value difference and give a real
application scenario.
Explanation - Interview focus: choosing the correct method based on whether one match or many matches are
needed.*/
console.log("Answer: You would use Find() when you need to retrieve a single element from an array that matches a specific condition while Filter() is used when you want to retrieve all elements that match a condition.");
console.log("Q15. reduce() — Total Bill");
let prices = [1200, 350, 999, 450];
let total = prices.reduce(function(total, price) {
    return total + price;
}, 0);
console.log(total);
console.log("Q16. [Medium] reduce() — Count Technologies");
let technologie = ["JS", "React", "JS", "Node", "React", "JS"];

let count = technologies.reduce(function(accumulator, technology) {

    if (accumulator[technology]) {
        accumulator[technology]++;
    } else {
        accumulator[technology] = 1;
    }

    return accumulator;

}, {});

console.log(count);
console.log("Q17. [Medium] sort() — Numeric Sorting");
const numbers = [[25, 3, 100, 12, 8]];
numbers[0].sort((a, b) => a - b);
console.log(numbers[0]);
console.log("Q18. sort() + Immutability")
const originalNumbers = [25, 3, 100, 12, 8];
const sortedNumbers = [...originalNumbers].sort((a, b) => a - b);
console.log(sortedNumbers);
console.log(originalNumbers);