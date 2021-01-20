"use strict";

// 2. variable rw(read/write)
// let (added in ES6)
{
  let name = "seungwoo";
  console.log(name);
  name = "hello";
  console.log(name);
}
console.log(name);

// var (don't ever use this!)
// var (선언전에 사용가능.)
// var hoisting (move declaration form bottom to top)
// has no block scope
{
  age = 4;
  var age;
}
console.log(age);

// 3. Constant r(read Only)
// mutable 'let'
// immutable 'const'

// Note!
// Immutable data types: primitive types, frozen object
// Mutable data types: all objects by default mutable are in JS
// favor immutable data type always for a few reasons:
// - security
// - thread safety
// - reduce human mistakes

// 4.Variable types
// primitive, single item: number(숫자), string, boolean, null, undefined, symbol
// object, box container
// function, first-class function 함수도 데이터 타입처럼 변수에 할당가능, 인자로 받기도 가능
const count = 17;
const size = 17.1;
console.log(`value:${count}, type: ${typeof count}`);
console.log(`value:${size}, type: ${typeof size}`);

const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = "not a number" / 2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

// bigInt(fairly new, don't use it yet)
const bigInt = 12312312312312312312313123123123123123n;
console.log(`value:${bigInt},type:${typeof bigInt}`);

// string
const char = "c";
const brendan = "brendan";
const greeting = "hello " + brendan;
console.log(`value: ${greeting}, type : ${typeof greeting}`);
const helloBob = `hi ${brendan}!`; // template literals(string)
console.log("value: " + helloBob + "type : " + typeof helloBob);

// boolean
// false: 0, null, undefined, NaN, ''
// true: any other value

// null - 너는 비어있다
let nothing = null;
// undefined - 아직 할당 안했다
let x = undefined;
let y;

// symbol, create unique identifiers for objects
const symbol1 = Symbol("id");
const symbol2 = Symbol("id");
console.log(symbol1 === symbol2);
const gSymbol1 = Symbol.for("id");
const gSymbol2 = Symbol.for("id");
console.log(gSymbol1 === gSymbol2);
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`);

// object, real-life object, data structure
const ellie = { name: "ellie", age: 20 };
ellie.age = 21;

// 5. Dynamic typing: dynamically typed language
let text = "hello";
console.log(text.charAt(0)); //h
console.log(`value: ${text},type: ${typeof text}`);
text = 1;
console.log(`value: ${text},type: ${typeof text}`);
text = "7" + 5;
console.log(`value: ${text},type: ${typeof text}`);
text = "8" / "2";
console.log(`value: ${text},type: ${typeof text}`);
console.log(text.charAt(0)); //boom
