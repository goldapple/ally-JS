// JSON
// Javascript Object Notation

// 1.Object to JSON
// stringify(obj)
let json = JSON.stringify(true);
console.log(json);

json = JSON.stringify(["apple", "banana"]);
console.log(json);

const rabbit = {
  name: "tori",
  color: "white",
  size: null,
  birthDate: new Date(),
  jump: function () {
    console.log(`${this.name} can jump!`);
  },
};
console.log(rabbit);
rabbit.jump();
json = JSON.stringify(rabbit); // 함수 및 자바스크립트의 특별한 데이터도 포함되지 않음
console.log(json);

json = JSON.stringify(rabbit, ["name", "color", "size"]);
console.log(json);

json = JSON.stringify(rabbit, (key, value) => {
  console.log(`key : ${key}, value : ${value}`);
  return value;
});
console.log(`그냥 value : ${json}`);

json = JSON.stringify(rabbit, (key, value) => {
  console.log(`key : ${key}, value : ${value}`);
  return key === "name" ? "ellie" : value;
});
console.log(`삼항 value : ${json}`);

// 2.JSON to Object
// parse(json)

json = JSON.stringify(rabbit);
const obj = JSON.parse(json, (key, value) => {
  console.log(`key : ${key}, value : ${value}`);
  return key === "birthDate" ? new Date(value) : value;
});
console.log(obj);
rabbit.jump();
console.log(rabbit.birthDate.getDate());
