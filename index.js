// JavaScript Basics Assessment
// ===========================>>Follow the instructions for each task and complete the code.<<=====================================

// Task 1: Comment Your JavaScript Code
// Write a single-line comment below this line:

//this is a single line of comment

// Task 2: Declare JavaScript Variables
// Declare a variable named `myName`:

var myName;

// Task 3: Storing Values with the Assignment Operator
// Assign the value "JavaScript" to a variable named `myLanguage`:

var myLanguage = "JavaScript";

// Task 4: Assigning the Value of One Variable to Another
// Declare a variable named `a` with the value 5, and another variable `b`. Assign `a` to `b`:

var a = 5;
var b;

a = b;

// Task 5: Initializing Variables with the Assignment Operator
// Declare and initialize a variable named `myAge` with the value 25:

let myAge = 25;

// Task 6: Declare String Variables
// Declare a string variable named `greeting` and set it to "Hello, World!":

const greeting = "Hello World!";

// Task 7: Understanding Uninitialized Variables
// Declare three variables `x`, `y`, and `z` without assigning values. Then, assign values 1, 2, and 3 to them:

const x;
const y;
const z;

// Task 8: Understanding Case Sensitivity in Variables
// Fix the variable names to follow case sensitivity:
// let StUdEnTnAmE = "John";
// let sTuDeNtAgE = 20;

let studentName = "John";
let studentAge = "20";

// Task 9: Explore Differences Between the var and let Keywords
// Declare a variable using `var` and another using `let`. Show the difference in scope (use a block of code to demonstrate):

function fn() {
    for (var i = 0; i < 3; i++) {
      setTimeout(() => console.log(i), 1000 * i);
    }
  }
  fn();
  // >>>>> Output <<<<
  // 3 (immediately)
  // 3 (after one second)
  // 3 (after two seconds)

function fn() {
    for (let i = 0; i < 3; i++) {
      setTimeout(() => console.log(i), 1000 * i);
    }
  }
  fn();
  
  // >>>>> Output <<<<
  // 0 (immediately)
  // 1 (after one second)
  // 2 (after two seconds)

// Task 10: Declare a Read-Only Variable with the const Keyword
// Declare a constant variable `PI` and assign it the value 3.14:

const PI = 3.14;
