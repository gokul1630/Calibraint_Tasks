/*
* Add function will not destroy soon because there's a another function in return
* so it won't removed from memory before return function executes
*/

function Add(x) {
  return function (y) {
    return function (z) {
      return x + y + z;
    };
  };
}

const add = Add(5);
console.log(add(10)(20)); // Output will be 35

function func(x) {
  let count = 10;
  return function () {
    return count + x;
  };
}

console.log(func(10)()); // Output will be 20
