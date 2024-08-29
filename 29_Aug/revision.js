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
