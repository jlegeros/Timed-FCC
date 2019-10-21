/*
CareerDevs Timed algorithm challenge
freeCodeCamp - Seek and Destroy
TIME: 4:43
*/

function destroyer(arr) {
  // Remove all the values
  for (let i = 1; i < arguments.length; i++) {
    arr = arr.filter(numb => numb != arguments[i]);
  }
  return arr;
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
