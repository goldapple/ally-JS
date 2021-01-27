// async & await
// clear style of using promise :)

// 1. async - promise 를 간편하게 쓸수있는 sympathic sugar
async function fetchUser() {
  // do network request in 10 secs....

  return "ellie";
}
const user = fetchUser();
user.then(console.log);

// 2. await

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function getApple() {
  await delay(1000);
  throw "error";
  return "사과";
}
async function getBanana() {
  await delay(1000);
  return "바나나";
}

async function pickFruits() {
  //   return getApple().then((apple) => {
  //     getBanana().then((banana) => `${apple}+${banana}`);
  //   });
  const applePromise = getApple();
  const bananaPromise = getBanana();
  const apple = await applePromise();
  const banana = await bananaPromise();
  return `${apple}+${banana}`;
}

pickFruits().then(console.log);

// 3. userful Promise APIs
function pickAllFruits() {
  return Promise.all([getApple().getBanana()]).then((fruits) =>
    fruits.join(" + ")
  );
}
pickAllFruits().then(console.log);

function pickOnlyOne() {
  return Promise.race([getApple(), getBanana]);
}

pickOnlyOne().then(console);