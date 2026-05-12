// ========================================
//  let - Practice Examples (Beginner)
// ========================================

// ----------------------------------------
// Example 1: Basic declaration and update
// ----------------------------------------
let fruit = "Apple";
console.log("1. fruit:", fruit);

fruit = "Banana";  // ✅ We can change the value
console.log("1. After update:", fruit);

// ----------------------------------------
// Example 2: Cannot re-declare in same scope
// ----------------------------------------
let points = 10;
// let points = 20;  // ❌ Error! Already declared
console.log("2. points:", points);

// ----------------------------------------
// Example 3: let is block-scoped
// ----------------------------------------
function letScopeTest() {
  if (true) {
    let greeting = "Hello";
    console.log("3. Inside block:", greeting); // ✅ Works
  }
  // console.log(greeting); // ❌ Error! Not visible outside the block
}
letScopeTest();

// ----------------------------------------
// Example 4: Block scope with if
// ----------------------------------------
let status = "active";
if (status === "active") {
  let message = "User is active";
  console.log("4.", message);
}
// console.log(message); // ❌ Error!

// ----------------------------------------
// Example 5: Hoisting with let (Temporal Dead Zone)
// ----------------------------------------
// console.log(notReady); // ❌ ReferenceError!
let notReady = "I am ready now";
console.log("5.", notReady);

// ----------------------------------------
// Example 6: let in a loop (new variable each iteration)
// ----------------------------------------
console.log("6. Loop with let:");
for (let k = 0; k < 3; k++) {
  console.log("   Inside loop k =", k);
}
// console.log(k); // ❌ Error! k is not defined outside

// ----------------------------------------
// Example 7: let with setTimeout (correct behavior)
// ----------------------------------------
console.log("7. setTimeout with let:");
for (let m = 0; m < 3; m++) {
  setTimeout(() => console.log("   let m:", m), 100);
}

// ----------------------------------------
// ✅ PRACTICE EXERCISES
//    Uncomment and try writing yourself
// ----------------------------------------

/*
// Exercise 1: Declare let 'car', print it, update to another car, print again.
let car = "Honda";
console.log("Exercise 1 - Car:", car);
car = "Toyota";
console.log("Exercise 1 - Updated Car:", car);
*/

/*
// Exercise 2: Declare let inside an if block, try to print outside.
if (true) {
  let secret = "password123";
  console.log("Inside:", secret);
}
// console.log("Outside:", secret); // Should give error
*/

/*
// Exercise 3: Use let in a for loop, print 1 to 5.
for (let num = 1; num <= 5; num++) {
  console.log("Number:", num);
}
// console.log(num); // Should give error
*/
