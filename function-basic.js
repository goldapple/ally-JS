function doSomething(add) {
  console.log(add);
  const result = add(2, 3);
  console.log(result);
}
function add(a, b) {
  const sum = a + b;
  return sum;
}

doSomething(add);

const addFun = add;
console.log(add);
addFun(1, 2);
