"use strict";

// Array

// 1. Declaration
const arr1 = new Array();
const arr2 = [1, 2];

// 2. Index position
const fruits = ["사과", "바나나"];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[fruits.length - 1]);

// 3. Looping over an array
// print all fruits
// a. for
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
// b. for of
for (let fruit of fruits) {
  console.log(fruit);
}
// c. forEach 배열의 각 요소마다 내가 전달한 함수를 실행
fruits.forEach((fruit, index) => console.log(fruit, index));

// 4.Addition, deletion, copy
// push: add an item to the end
fruits.push("딸기", "복숭아");
console.log(fruits);
// pop: remove an item from the end
fruits.pop();
console.log(fruits);

// unshift: add an item to the beginning 앞에서 추가
fruits.unshift("레몬");

// shift: remove an item from the beginning
fruits.shift();
// note!! shift, unshift are slower than pop, push
// splice: remove an item by index position

fruits.push("아보카도", "레몬");
console.log(fruits);

fruits.splice(1, 1);
console.log(fruits);
fruits.splice(1, 1, "메론", "수박"); //지운 자리에 데이터 삽입 가능
console.log(fruits);

// combine two arrays
const fruits2 = ["키위", "카카오"];
const newfruits = fruits.concat(fruits2);
console.log(newfruits);

// 5.Searching
// find the index
console.clear();
console.log(fruits);
console.log(fruits.indexOf("사과"));
console.log(fruits.indexOf("코코넛"));
// includes
console.log(fruits.includes("수박"));
console.log(fruits.includes("코코넛"));

// lastIndexOf 제일 마지막에 들어잇는 인덱스 출력
console.clear();
fruits.push("사과");
console.log(fruits);
console.log(fruits.indexOf("사과"));
console.log(fruits.lastIndexOf("사과"));
