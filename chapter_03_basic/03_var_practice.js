// ========================================
//  var - Practice Examples (Beginner)
// ========================================

// ----------------------------------------
// Example 1: Basic declaration and update
// ----------------------------------------
var userName = "Shashi";
console.log("1. userName:", userName);

userName = "Ravi";  // ✅ We can change the value
console.log("1. After update:", userName);

// ----------------------------------------
// Example 2: Re-declaring the same variable
// ----------------------------------------
var score = 10;
var score = 20;  // ✅ var allows re-declaration
console.log("2. score:", score);

// ----------------------------------------
// Example 3: var is function-scoped
// ----------------------------------------
function checkScope() {
  if (true) {
    var message = "Hello from inside if block";
  }
  console.log("3.", message); // ✅ Works! var is visible in the whole function
}
checkScope();

// ----------------------------------------
// Example 4: Global scope
// ----------------------------------------
var country = "India";
console.log("4. Country:", country);

// ----------------------------------------
// Example 5: Hoisting
// ----------------------------------------
console.log("5. hoistedValue:", hoistedValue); // undefined (not an error!)
var hoistedValue = 100;
// JS reads it as: var hoistedValue; console.log(...); hoistedValue = 100;

// ----------------------------------------
// Example 6: var in a loop (classic behavior)
// ----------------------------------------
console.log("6. Loop with var:");
for (var i = 0; i < 3; i++) {
  console.log("   Inside loop i =", i);
}
console.log("   After loop i =", i); // ✅ i is still accessible here!

// ----------------------------------------
// ✅ PRACTICE EXERCISES
//    Uncomment the code below one by one
//    Run: node chapter_03_basic/03_var_practice.js
// ----------------------------------------

/*
// Exercise 1: Declare a var 'city', print it, then change it and print again.
var city = "Delhi";
console.log("Exercise 1 - City:", city);
city = "Mumbai";
console.log("Exercise 1 - Updated City:", city);
*/

/*
// Exercise 2: Declare var 'total = 0', update it inside an if block, print after.
var total = 0;
if (true) {
  total = total + 50;
}
console.log("Exercise 2 - Total:", total);
*/

/*
// Exercise 3: Re-declare var 'name' three times and see the last value.
var name = "A";
var name = "B";
var name = "C";
console.log("Exercise 3 - Name:", name);
*/

/*
// Exercise 4: Try hoisting yourself
console.log("Exercise 4 - before:", myVar);
var myVar = 500;
console.log("Exercise 4 - after:", myVar);
*/
