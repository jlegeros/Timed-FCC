/*
CareerDevs Timed algorithm challenge
freeCodeCamp - DNA Pairing
TIME: 3:13
*/

function pairElement(str) {
  let elements = [];
  for (let i = 0; i < str.length; i++) {
    switch (str[i]) {
      case "C":
        elements.push(["C", "G"]);
        break;
      case "G":
        elements.push(["G", "C"]);
        break;
      case "A":
        elements.push(["A", "T"]);
        break;
      case "T":
        elements.push(["T", "A"]);
        break;
    }
  }
  return elements;
}

console.log(pairElement("GCG"));
