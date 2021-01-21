// Objects
// one of the JavaScript's data types
// a collection of related data and/or functionality
// Nearly all objects in JavaScript are instances of Object

// 1. Literals and properties
// object = { key : value };
const name = "ellie";
const age = 4;
print(name, age);
function print(person) {
  console.log(person.name);
  console.log(person.age);
}

const ellie = { name: "ellie", age: 4 };

const obj1 = {}; // 'object literal' syntax
const obj2 = new Object(); //'object constructor' syntax

// with JavaScript magic(dynamically typed language)
// can add properties later
ellie.hasJob = true;
console.log(ellie.hasJob);

delete ellie.hasJob;
console.log(ellie.hasJob);

// 2.Computed properties
// key should be always string
console.log(ellie.name);
console.log(ellie["name"]); // string 형태로 접근 가능
ellie["hasJob"] = true;
console.log(ellie.hasJob);

function printValue(obj, key) {
  // console.log(obj.key); key는 string이여야한다. 이건 obj의 key라는 key를 찾는 말
  console.log(obj[key]); // 동적으로 key값을 받아올 때 유용하다.
}

// 3.Property value shorthand
const person1 = { name: "bob", age: 2 };
const person2 = { name: "steve", age: 3 };
const person3 = { name: "dave", age: 4 };
const person4 = Person("ellie", 30);

// 4. Constructor Function
function Person(name, age) {
  // object 생성 함수. 이름 첫글자를 대문자
  // this = {}
  this.name = name;
  this.age = age;
  //   return this;
}

// 5.in operator: peroperty existence check (key in obj)
console.log("name" in ellie);
console.log("age" in ellie);
console.log("random" in ellie);
console.log(ellie.random);

// 6. for..in vs for..of
// for (key in obj)
console.clear();
for (key in ellie) {
  console.log(key);
}

// for (value of iterable)
const array = [1, 2, 4, 5];
// for (let i = 0; i < array.length; i++) {
//   console.log(array[i]);
// }
for (value of array) {
  console.log(value);
}

// 7. cloning
// Object.assign(dest, [obj1, obj2,  obj3...])
const user = { name: "ellie", age: "20" };
const user2 = user;

user2.name = "coder";
console.log(user);

// old way
const user3 = {};
for (key in user) {
  user3[key] = user[key];
}
console.log(user3);

const user4 = Object.assign({}, user);
console.log(user4);

// another example
const fruit1 = { color: "red" };
const fruit2 = { color: "blue", size: "big" };
const mixed = Object.assign({}, fruit1, fruit2); //뒤에 나오는 object가 덮어 씌운다.
console.log(mixed.color);
console.log(mixed.size);
