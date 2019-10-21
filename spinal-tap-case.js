/*
CareerDevs Timed algorithm challenge
freeCodeCamp - Spinal Tap Case
TIME: 19:24
*/

function spinalCase(str) {
  // look for capital letters that are not preceded by a space
  // starting i at 1 because I don't care about the first letter
  let strArray = str.split("");
  for (let i = 1; i < strArray.length; i++) {
    if (strArray[i] != strArray[i].toLowerCase() && strArray[i - 1] != " ") {
      strArray.splice(i, 1, [" " + strArray[i].toLowerCase()]);
    }
  }
  str = strArray.join("");
  str = str.toLowerCase();

  str = str.replace(/_/g, "");
  str = str.replace(/\s/g, "-");

  return str;
}

console.log(spinalCase("The_Andy_Griffith_Show"));
