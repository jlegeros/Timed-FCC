/*
CareerDevs Timed algorithm challenge
freeCodeCamp - HTML Entities
TIME: 4:15
*/

function convertHTML(str) {
  str = str.replace(/\&/g, "&amp;");
  str = str.replace(/\</g, "&lt;");
  str = str.replace(/\>/g, "&gt;");
  str = str.replace(/\"/g, "&quot;");
  str = str.replace(/\'/g, "&apos;");
  return str;
}

console.log(convertHTML("Hamburgers < Pizza < Tacos"));