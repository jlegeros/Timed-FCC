/*
CareerDevs Timed algorithm challenge
Free Code Camp - Sum Range
TIME: 2:56
*/

function sumAll(arr) {
  let sum = 0;
  let small, large;
  if (arr[0] > arr[1]) {
    large = arr[0];
    small = arr[1];
  } else {
    large = arr[1];
    small = arr[0];
  }

  for (let i = small; i <= large; i++) {
    sum += i;
  }
  return sum;
}

console.log(sumAll([1, 4]));
