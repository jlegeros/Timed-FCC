/*
CareerDevs Timed algorithm challenge
freeCodeCamp - Smallest Common Multiple
TIME: 7:53
*/

function smallestCommons(arr) {
  let small, big;
  if (arr[0] > arr[1]) {
    big = arr[0];
    small = arr[1];
  } else {
    big = arr[1];
    small = arr[0];
  }

  count = 1;
  let multiple;
  while (true) {
    multiple = count * big;
    let common = true;
    for (let i = big - 1; i >= small; i--) {
      if (multiple % i != 0) {
        common = false;
        break;
      }
    }
    if (common) {
      break;
    }
    count++;
  }
  console.log(typeof (multiple));
  return multiple;
}


console.log(smallestCommons([23, 18]));