/*
CareerDevs Timed algorithm challenge
freeCodeCamp - Sorted Union
TIME: 5:49
*/

function uniteUnique(arr) {
  let newArr = [];
  for (let i = 0; i < arguments.length; i++) {
    for (let j = 0; j < arguments[i].length; j++) {
      if (!newArr.includes(arguments[i][j])) {
        newArr.push(arguments[i][j]);
      }
    }
  }

  return newArr;
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));