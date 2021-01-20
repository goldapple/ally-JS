// 1. String concatenation
console.log("my" + "cat");
console.log("1" + 2);
console.log(`string literals:
''''
1+2=${1 + 2}`);
console.log("ellie's \n\tbook");

// 2.Numeric operators

console.log(1 + 1);

// 3.Increment and decrement operator
let counter = 2;
const preIncrement = ++counter;
// counter = counter+1;
// preIncrement = counter;
console.log(`preIncrement:${preIncrement}, counter: ${counter}`);
const postIncrement = counter++;
// postIncrement = counter;
// counter= counter+1;
console.log(`postIncrement: ${postIncrement}, counter: ${counter}`);

// 4. Assignment operators

let x = 3;
let y = 6;
x += y; // x=x+y

// 5. Comparison opertors
console.log(10 < 6);
console.log(10 <= 6);

// 6.Logical operators: || (or), && (and), ! (not)

// (or) , finds the first truthy value

// && (and), finds the first falsy value

// often used to compress long if-statement
// nullableObject && nullableObject.something
if (nullableObject != null) {
  nullableObject.something;
}

//  !(not)

// 7. Equality
const stringFive = "5";
const numberFive = 5;
// == loose equality, with type conversion
console.log(stringFive == numberFive);
// === strict equality, no type conversion
console.log(stringFive === numberFive);
// object equality by reference
const ellie1 = { name: "ellie" };
const ellie2 = { name: "ellie" };
const ellie3 = ellie1;
console.log(ellie1 == ellie2);
console.log(ellie1 === ellie2);
console.log(ellie1 === ellie3);

// equality - puzzler
console.log(0 == false); // true
console.log(0 === false); //false
console.log("" == false); // true
console.log("" === false); // false
console.log(null == undefined); //true
console.log(null === undefined); //false

// 8. Conditional operators: if
// if, else if, else

// 9. Ternary operator: ?
// condition ? value1 : value2;

// 10. Switch statement
// use for multiple if checks
// use for enum-like value check
// use for multiple type checks in TS

// 11. Loops
// while loop, while the condition is truthy,
// body code is executed

// do while loop, body code is executed first,
// then check the condition.

// for loop, for(begin; condition; step)

// nested loops

// break, continue
