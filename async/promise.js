"user strict";

// Promise is a JavaScript object for asynchronous operation
// State : pending(미결제) -> fulfilled or rejected
// Producer vs Consumer

// 1. Producer <- 만들자마자실행됨
// when new Promis is created, the executor runs automatically
const promise = new Promise((resolve, reject) => {
  // doing some heavy work(network, read file)
  console.log("doing something");
  setTimeout(() => {
    resolve("ellie");
    // reject(new Error("no network"));
  }, 2000);
});

// 2. Consumers: then, catch, finally
promise
  .then((value) => {
    // 정상적으로 진행되서 resolve되면 실행
    console.log(value);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("finally");
  });

// 3. Promise chaining
const fetchNumber = new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 1000);
});
fetchNumber
  .then((num) => num * 2)
  .then((num) => num * 3)
  .then((num) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(num - 1);
      }, 1000);
    });
  })
  .then((num) => console.log(num));

//   4. Error Handling
const getHen = () =>
  new Promise((resolve, rejcet) => {
    setTimeout(() => resolve("닭"), 1000);
  });
const getEgg = (hen) =>
  new Promise((resolve, rejcet) => {
    setTimeout(() => reject(new Error(`error! ${hen}=>달걀`)), 1000);
  });
const cook = (egg) =>
  new Promise((resolve, rejcet) => {
    setTimeout(() => resolve(`${egg}=>계란후라이`), 1000);
  });

getHen()
  .then((hen) => getEgg(hen)) // == then(getEgg) 가능
  .catch((error) => {
    return "빵";
  }) // 에러나는곳 바로 다음에 catch를 써서 에러 핸들링 가능
  .then((egg) => cook(egg)) // == then(cook) 가능
  .then((meal) => console.log(meal)) // == console.log 가능
  .catch(console.log);
