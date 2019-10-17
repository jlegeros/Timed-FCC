/*
CareerDevs Timed algorithm challenge
freeCodeCamp - Diff Two Arrays
TIME: 10:16
*/

function diffArray(arr1, arr2) {
  var newArr = [];
  // Same, same; but different.
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] == arr2[j]) {
        arr1.splice(i, 1);
        arr2.splice(j, 1);
        i--;
        j--;
        break;
      }
    }
  }
  if (arr1.length > 0) {
    newArr = newArr.concat(arr1);
  }
  if (arr2.length > 0) {
    newArr = newArr.concat(arr2);
  }
  return newArr;
}

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));
