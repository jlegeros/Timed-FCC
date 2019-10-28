/*
CareerDevs Timed algorithm challenge
freeCodeCamp - Pig Latin
TIME: 8:22
*/

function translatePigLatin(str) {
  let strArr = str.split("");

  for (let i = 0; i < strArr.length; i++) {
    if (
      strArr[i] == 'a' ||
      strArr[i] == 'e' ||
      strArr[i] == 'i' ||
      strArr[i] == 'o' ||
      strArr[i] == 'u'
    ) {
      if (i == 0) {
        return strArr.join("") + "way";
      } else {
        let spliced = strArr.splice(0, i);
        return strArr.join("") + spliced.join("") + "ay";
      }
    }
  }
  return str + "ay";
}

console.log(translatePigLatin("algorithm"));