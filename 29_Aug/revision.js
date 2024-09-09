// console.log("working ");

// Variable ?
// 1. Container for storing data

// var, let and const

// 1. var  - var is a way of defining variable, it is global scope and function scope depending upon where it is declared...
// var can be re-declared and reinitialized
// var should be avoided as much as possible

// declaring / defining = //initialization
// var newString = "hello world";
// console.log(newString);

// {
//   var newString = "4";
//   console.log(newString);
// }

// console.log(newString);

// let and const
// --> let can be reinitialized but cannot be redeclared, it block scoped variable

// let a = 10;
// a = 20;
// console.log(a);

// const is blocked scoped, it cannot be reinitialized nor be redeclared
// const needs to be initialized and declared on the same line

// ------------------------------------------------------------------------------

// Data Types :

// In Javascript, there are two categories of data types
// ---> 1. Primitive 2. Non-Primitive
//--> Primitive : 1. Number 2. String 3. Boolean 4. Undefined 5. Null 6. Symbol 7. BigInt
// Non-Primitive : 1. Arrays and 2. Objects

// --------------------------------------------------
// Arrays
// array literal
// let students = ["Charan", "Vishnu", "Usha", "Narasimha"];

// array constructor
// let students1 = new Array("val1", "val2");

// Array Methods = Map, Filter and Reduce
// find, forEach, sort, push, pop, slice, splice

// --> Objects
// 1. Object Literal
// 2. Object Constructor
// 3. Object.create()
// 4. using ES6

// Output based questions
// let obj1 = {
//   // key: value
//   name: "John",
//   age: 13,
// };

// console.log(obj1["name"]);
// console.log(obj1.age);

// ------------------------------------------------------

// Functions --> set of code to perform some sort of operations

// 1. Function Declaration
// 2. Function Expression
// 3. Arrow Functions (ES6)

//Function Expression
// let a = function (b, c) {
//   console.log(b + c);
// };

// a(b, c);

// Function Declaration
// function add() {
//   //block of code
// }
// add();

// ArrowFunctions
// const add = () =>{

// }

// add();
// add();

// Function that provides the same output everytime the same input is given this is called as pure function.

// function add() {
//   return a + b;
// }

// add(5, 4);
// add(3, 4);
// add(2, 7);

// Spread and Rest Operator (...)

// let array1 = ["This", "is"];

// let array2 = [...array1, "Sharat"];

// console.log(array2);

// function rest(...thisArgs) {
//   console.log(thisArgs.length);
// }

// rest(1, 3, 4, 5, 6);
// --------------------------------------------------------
// Destructuring
// Arrays and Object

// let vehicles = ["Innova", "BMW", "AshokLeyland"];

// let [car, bike, truck] = vehicles;

// console.log(car);
// console.log(bike);
// console.log(truck);

// let student = {
//   name: "Narendra",
//   age: 25,
//   role: "Full Stack Developer",
// };

// let {name : fullName, role : position} = student;

// console.log(`My name is ${fullName} and I work as ${position}`);

// -------------------------------------------------------------------------

// Callback Function :
// In Javascript, Callback functions are the functions that can be passed as an argument to another function.

// a - 2, e - 3, i - 4, o - 1, u - 2

// function printVowels() {
//   setTimeout(() => {
//     console.log("A");
//     setTimeout(() => {
//       console.log("E");
//       setTimeout(() => {
//         console.log("I");
//         setTimeout(() => {
//           console.log("O");
//           setTimeout(() => {
//             console.log("U");
//           }, 2000);
//         }, 1000);
//       }, 4000);
//     }, 1000);
//   }, 2000);
// }

// printVowels();

// Callback < Promises < Async Await

// Promises and Async Await - ES6 and ES7
// Promise is as object and it is return two things that is resolve and reject

function printVowels(vowel, time) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(vowel);
      resolve();
    }, time);
  });
}

// function callVowels() {
//   printVowels("A", 2000)
//     .then(() => printVowels("E", 3000))
//     .then(() => printVowels("I", 2000))
//     .then(() => printVowels("O", 1000))
//     .then(() => printVowels("U", 1000))
//     .catch((error) => console.log(error));

//   //multiple .then will create promises
// }

async function callVowels() {
  await printVowels("A", 2000);
  await printVowels("E", 1000);
  await printVowels("I", 5000);
  await printVowels("O", 3000);
  await printVowels("U", 1000);
}

callVowels();

// Async Await - are brothers are sister
