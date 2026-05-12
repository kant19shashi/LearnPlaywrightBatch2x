// ========================================
//  const - Practice Examples (Beginner)
// ========================================

// ----------------------------------------
// Example 1: Basic declaration (must initialize)
// ----------------------------------------
const PI = 3.14159;
console.log("1. PI:", PI);

// const RATE; // ❌ Error! Must initialize when declaring

// ----------------------------------------
// Example 2: Cannot re-assign primitive value
// ----------------------------------------
const maxUsers = 100;
// maxUsers = 200; // ❌ TypeError: Assignment to constant variable.
console.log("2. maxUsers:", maxUsers);

// ----------------------------------------
// Example 3: const is block-scoped (same as let)
// ----------------------------------------
function constScopeTest() {
  if (true) {
    const apiKey = "abc123";
    console.log("3. Inside block:", apiKey); // ✅ Works
  }
  // console.log(apiKey); // ❌ Error! Not visible outside
}
constScopeTest();

// ----------------------------------------
// Example 4: Object with const (properties CAN be modified)
// ----------------------------------------
const user = { name: "Shashi", age: 30 };
user.age = 31;              // ✅ Allowed
user.country = "India";     // ✅ Allowed
console.log("4. user:", user);

// user = {}; // ❌ Error! Cannot re-assign the object

// ----------------------------------------
// Example 5: Array with const (elements CAN be modified)
// ----------------------------------------
const colors = ["red", "green"];
colors.push("blue");        // ✅ Allowed
colors[0] = "yellow";       // ✅ Allowed
console.log("5. colors:", colors);

// colors = ["pink"]; // ❌ Error! Cannot re-assign the array

// ----------------------------------------
// Example 6: Freeze an object to make it truly constant
// ----------------------------------------
const settings = { theme: "dark", lang: "en" };
Object.freeze(settings);
// settings.theme = "light"; // ❌ Won't work (silently fails or throws in strict mode)
console.log("6. settings:", settings);

// ----------------------------------------
// Example 7: const in a loop
// ----------------------------------------
console.log("7. for-of with const:");
const fruits = ["apple", "banana", "cherry"];
for (const fruit of fruits) {
  console.log("   ", fruit); // ✅ Works, new binding each iteration
}

// ----------------------------------------
// ✅ PRACTICE EXERCISES
//    Uncomment and try writing yourself
// ----------------------------------------

/*
// Exercise 1: Declare const 'TAX_RATE', try to change it and see error.
const TAX_RATE = 0.18;
console.log("Tax Rate:", TAX_RATE);
// TAX_RATE = 0.20; // Should give error
*/

/*
// Exercise 2: Create const object 'student', add new property.
const student = { name: "Ravi", grade: "A" };
student.subject = "Math"; // Allowed
console.log("Student:", student);
// student = {}; // Should give error
*/

/*
// Exercise 3: Create const array 'days', add "Sunday" using push.
const days = ["Monday", "Tuesday"];
days.push("Sunday"); // Allowed
console.log("Days:", days);
// days = ["Friday"]; // Should give error
*/
