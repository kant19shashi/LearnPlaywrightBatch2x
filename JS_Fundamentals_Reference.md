# JavaScript Fundamentals Reference

## 1. Keywords

Reserved words in JavaScript that have special meaning and cannot be used as identifiers.

| Keyword | Description |
|---------|-------------|
| `break` | Terminates a loop or switch |
| `case` | Marks a block in switch statement |
| `catch` | Handles exceptions in try block |
| `class` | Declares a class |
| `const` | Declares a block-scoped constant |
| `continue` | Skips current iteration in a loop |
| `debugger` | Invokes debugger |
| `default` | Default case in switch |
| `delete` | Deletes a property from an object |
| `do` | Creates a do-while loop |
| `else` | Alternate block in if statement |
| `export` | Exports a module |
| `extends` | Creates a class inheritance |
| `false` | Boolean false value |
| `finally` | Block executed after try-catch |
| `for` | Creates a for loop |
| `function` | Declares a function |
| `if` | Conditional statement |
| `import` | Imports a module |
| `in` | Checks if property exists in object |
| `instanceof` | Tests object type |
| `let` | Declares a block-scoped variable |
| `new` | Creates an instance of an object |
| `null` | Represents empty value |
| `of` | Used in for-of loops |
| `return` | Exits a function and returns a value |
| `super` | Calls parent class constructor/method |
| `switch` | Multi-way conditional statement |
| `this` | Refers to current object |
| `throw` | Throws an exception |
| `true` | Boolean true value |
| `try` | Defines a block for error handling |
| `typeof` | Returns data type of a value |
| `undefined` | Undefined value |
| `var` | Declares a function-scoped variable |
| `void` | Evaluates expression without returning value |
| `while` | Creates a while loop |
| `with` | Extends scope chain (deprecated) |
| `yield` | Pauses/resumes a generator function |

---

## 2. Identifiers

Names given to variables, functions, classes, etc. following specific rules.

| Rule | Valid Examples | Invalid Examples |
|------|---------------|-----------------|
| Start with letter, `_`, or `$` | `name`, `_count`, `$price` | `1name` (starts with digit) |
| Can contain letters, digits, `_`, `$` | `userName1`, `data_2` | `my-var` (hyphen not allowed) |
| Cannot be a reserved keyword | `total`, `myFunction` | `var`, `if`, `return` |
| Case-sensitive | `myVar` and `myvar` are different | - |
| No spaces allowed | `firstName`, `totalAmount` | `first name` |
| Cannot start with a digit | `result2`, `_temp` | `2result` |
| Can use Unicode letters | `ñúmero`, `π` | - |

**Naming Conventions:**

| Convention | Style | Example |
|------------|-------|---------|
| camelCase | variables, functions | `getUserName`, `totalAmount` |
| PascalCase | classes, constructors | `UserProfile`, `CarModel` |
| UPPER_SNAKE_CASE | constants | `MAX_VALUE`, `API_KEY` |
| _prefix | private/protected | `_privateVar`, `_internal` |

---

## 3. Literals

Fixed values written directly in code.

| Type | Category | Examples |
|------|----------|---------|
| **Numeric** | Integer | `10`, `-5`, `0`, `255`, `1_000_000` |
| | Floating-point | `3.14`, `-0.5`, `1.5e10` |
| | Binary | `0b1010` (10 in decimal) |
| | Octal | `0o77` (63 in decimal) |
| | Hexadecimal | `0xFF` (255 in decimal) |
| **String** | Double quotes | `"Hello, World!"` |
| | Single quotes | `'JavaScript'` |
| | Backtick (template) | `` `Hello ${name}` `` |
| **Boolean** | True | `true` |
| | False | `false` |
| **Null** | Null | `null` |
| **Undefined** | Undefined | `undefined` |
| **Array** | Array literal | `[1, 2, 3]`, `["a", "b"]` |
| **Object** | Object literal | `{name: "John", age: 30}` |
| **RegExp** | Regex literal | `/pattern/flags` |
| **BigInt** | Big integer | `9007199254740991n`, `0xFn` |

---

## 4. Operators

### Arithmetic Operators

| Operator | Name | Example | Result |
|----------|------|---------|--------|
| `+` | Addition | `5 + 3` | `8` |
| `-` | Subtraction | `10 - 4` | `6` |
| `*` | Multiplication | `4 * 3` | `12` |
| `**` | Exponentiation | `2 ** 3` | `8` |
| `/` | Division | `15 / 4` | `3.75` |
| `%` | Modulus (remainder) | `15 % 4` | `3` |
| `++` | Increment | `x++` / `++x` | Returns `x` then adds 1 / Adds 1 then returns |
| `--` | Decrement | `x--` / `--x` | Returns `x` then subtracts 1 / Subtracts 1 then returns |
| `+` | Unary plus | `+"5"` | `5` |
| `-` | Unary negation | `-5` | `-5` |

### Assignment Operators

| Operator | Name | Example | Equivalent to |
|----------|------|---------|---------------|
| `=` | Assignment | `x = 5` | `x = 5` |
| `+=` | Add and assign | `x += 3` | `x = x + 3` |
| `-=` | Subtract and assign | `x -= 3` | `x = x - 3` |
| `*=` | Multiply and assign | `x *= 3` | `x = x * 3` |
| `/=` | Divide and assign | `x /= 3` | `x = x / 3` |
| `%=` | Modulus and assign | `x %= 3` | `x = x % 3` |
| `**=` | Exponentiate and assign | `x **= 3` | `x = x ** 3` |
| `&&=` | Logical AND and assign | `x &&= y` | `x = x && y` |
| `\|\|=` | Logical OR and assign | `x \|\|= y` | `x = x \|\| y` |
| `??=` | Nullish coalescing assign | `x ??= y` | `x = x ?? y` |

### Comparison Operators

| Operator | Name | Example | Result |
|----------|------|---------|--------|
| `==` | Equal (with coercion) | `5 == "5"` | `true` |
| `===` | Strict equal | `5 === "5"` | `false` |
| `!=` | Not equal (with coercion) | `5 != "5"` | `false` |
| `!==` | Strict not equal | `5 !== "5"` | `true` |
| `>` | Greater than | `10 > 5` | `true` |
| `<` | Less than | `10 < 5` | `false` |
| `>=` | Greater than or equal | `5 >= 5` | `true` |
| `<=` | Less than or equal | `5 <= 4` | `false` |
| `? :` | Ternary (conditional) | `age >= 18 ? "Adult" : "Minor"` | Depends on condition |

### Logical Operators

| Operator | Name | Example | Result |
|----------|------|---------|--------|
| `&&` | AND | `true && false` | `false` |
| `\|\|` | OR | `true \|\| false` | `true` |
| `!` | NOT | `!true` | `false` |
| `??` | Nullish coalescing | `null ?? "default"` | `"default"` |

### Bitwise Operators

| Operator | Name | Example | Result |
|----------|------|---------|--------|
| `&` | AND | `5 & 1` | `1` |
| `\|` | OR | `5 \| 1` | `5` |
| `^` | XOR | `5 ^ 1` | `4` |
| `~` | NOT | `~5` | `-6` |
| `<<` | Left shift | `5 << 1` | `10` |
| `>>` | Right shift | `5 >> 1` | `2` |
| `>>>` | Unsigned right shift | `-5 >>> 1` | `2147483645` |

### String Operators

| Operator | Name | Example | Result |
|----------|------|---------|--------|
| `+` | Concatenation | `"Hello" + " " + "World"` | `"Hello World"` |
| `+=` | Concatenate and assign | `str += "!"` | Appends to string |

### Special Operators

| Operator | Name | Example |
|----------|------|---------|
| `typeof` | Returns type of operand | `typeof 42` → `"number"` |
| `instanceof` | Checks object type | `arr instanceof Array` |
| `in` | Checks property existence | `"name" in obj` |
| `delete` | Deletes a property | `delete obj.prop` |
| `new` | Creates object instance | `new Date()` |
| `,` | Comma (evaluates both, returns second) | `let x = (1, 2)` → `x = 2` |
| `?.,` | Optional chaining | `obj?.prop?.nested` |
| `?.()` | Optional function call | `obj.method?.()` |

### Operator Precedence (Highest to Lowest)

| Level | Operators |
|-------|-----------|
| 18 | `()` (grouping), `.` `[]` `?.` (member access), `new` (with args) |
| 17 | `new` (without args), `()` (function call) |
| 16 | `++` `--` (postfix) |
| 15 | `!` `~` `+` `-` `typeof` `void` `delete` `++` `--` (prefix/unar) |
| 14 | `**` (exponentiation, right-to-left) |
| 13 | `*` `/` `%` |
| 12 | `+` `-` |
| 11 | `<<` `>>` `>>>` |
| 10 | `<` `<=` `>` `>=` `in` `instanceof` |
| 9 | `==` `!=` `===` `!==` |
| 8 | `&` |
| 7 | `^` |
| 6 | `\|` |
| 5 | `&&` |
| 4 | `\|\|` |
| 3 | `??` |
| 2 | `? :` (ternary, right-to-left) |
| 1 | `=` `+=` `-=` `*=` `/=` etc. (assignment, right-to-left) |
| 0 | `,` (comma) |
