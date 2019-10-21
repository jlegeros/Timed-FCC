/*
CareerDevs Timed algorithm challenge
freeCodeCamp - Wherefore Art Thou
TIME: 7:14
*/

function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];
  // Only change code below this line
  let keys = Object.keys(source);
  for (let i = 0; i < collection.length; i++) {
    let objectContains = true;
    for (let j = 0; j < keys.length; j++) {
      if (collection[i][keys[j]] != source[keys[j]]) {
        objectContains = false;
        break;
      }
    }
    if (objectContains) {
      arr.push(collection[i]);
    }
  }

  // Only change code above this line
  return arr;
}

console.log(
  whatIsInAName(
    [
      { first: "Romeo", last: "Montague" },
      { first: "Mercutio", last: null },
      { first: "Tybalt", last: "Capulet" }
    ],
    { last: "Capulet" }
  )
);
