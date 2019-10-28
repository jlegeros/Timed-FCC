/*
CareerDevs Timed algorithm challenge
freeCodeCamp - Missing Letters
TIME: 5:34
*/

function fearNotLetter(str) {
  let previous = str.charCodeAt(0);
  let missingLetter;
  for (let i = 1; i < str.length; i++) {
    if (previous + 1 != str.charCodeAt(i)) {
      missingLetter = String.fromCharCode(previous + 1);
      break;
    }
    previous = str.charCodeAt(i);
  }
  return missingLetter;
}

console.log(fearNotLetter("abce"));