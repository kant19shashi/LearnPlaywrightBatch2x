/*
========================================
Chapter 03: var, let, const & Hoisting
========================================

1. DIFFERENCE BETWEEN var, let, AND const
-----------------------------------------
- var   : Function scoped, can be re-declared and updated, hoisted.
- let   : Block scoped, can be updated but NOT re-declared, hoisted (TDZ).
- const : Block scoped, can NOT be updated or re-declared, must be initialized.

2. HOISTING
-----------
Hoisting moves variable/function declarations to the top of their scope.
- var is hoisted and initialized with 'undefined'.
- let and const are hoisted but NOT initialized (Temporal Dead Zone).

3. CAN WE CHANGE THE VALUE OF const?
------------------------------------
NO for primitive re-assignment.
YES for mutating objects/arrays inside a const variable.

4. FUNCTION SCOPE vs BLOCK SCOPE
--------------------------------
- var is function scoped (visible in the whole function).
- let/const are block scoped (visible only inside {} where declared).

5. SETTIMEOUT LOOP OUTPUT (var vs let)
--------------------------------------
var loop prints: 3, 3, 3  (shared variable)
let loop prints: 0, 1, 2  (new variable each iteration)
========================================
*/

// ========================================
// 1. var vs let vs const examples
// ========================================

var x = 1;
var x = 2; // ✅ Allowed

let y = 1;
// let y = 2; // ❌ SyntaxError: Identifier 'y' has already been declared
y = 2;       // ✅ Allowed

const z = 1;
// z = 2;     // ❌ TypeError: Assignment to constant variable.

// ========================================
// 2. Hoisting example
// ========================================

console.log("\n--- Hoisting ---");

// console.log(hoistedVar); // undefined (no error because var is hoisted)
var hoistedVar = "I am hoisted";

// console.log(hoistedLet); // ❌ ReferenceError: Cannot access before initialization
let hoistedLet = "I am in TDZ";

// ========================================
// 3. const mutation example
// ========================================

console.log("\n--- const Mutation ---");

const person = { name: "Alice", age: 25 };
person.age = 26;          // ✅ Mutating property is allowed
person.city = "New York"; // ✅ Adding property is allowed
console.log(person);

// person = {}; // ❌ TypeError: Assignment to constant variable.

const numbers = [1, 2, 3];
numbers.push(4); // ✅ Allowed
console.log(numbers);

// ========================================
// 4. Function Scope vs Block Scope
// ========================================

console.log("\n--- Scope ---");

function scopeTest() {
  if (true) {
    var functionScoped = "I am var";
    let blockScoped = "I am let";
  }
  console.log(functionScoped); // ✅ Works
  // console.log(blockScoped); // ❌ ReferenceError
}
scopeTest();

// ========================================
// 5. Output of setTimeout loops
// ========================================

console.log("\n--- setTimeout with var ---");
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log("var i:", i), 100);
}
// Output after 100ms:
// var i: 3
// var i: 3
// var i: 3
// Reason: 'var i' is shared across all iterations.

console.log("\n--- setTimeout with let ---");
for (let j = 0; j < 3; j++) {
  setTimeout(() => console.log("let j:", j), 100);
}
// Output after 100ms:
// let j: 0
// let j: 1
// let j: 2
// Reason: 'let j' creates a new binding for each iteration.
