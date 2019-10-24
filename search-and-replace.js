/*
CareerDevs Timed algorithm challenge
freeCodeCamp - Search and Replace
TIME: 3:52
*/

function myReplace(str, before, after) {
  if (before[0] == before[0].toUpperCase()) {
    let arr = after.split("");
    arr[0] = arr[0].toUpperCase();
    after = arr.join("");
  }
  str = str.replace(before, after);
  return str;
}

console.log(
  myReplace("A quick brown fox jumped over the lazy dog", "Jumped", "leaped")
);
