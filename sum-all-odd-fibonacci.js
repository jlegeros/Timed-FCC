/*
CareerDevs Timed algorithm challenge
freeCodeCamp - Sum All Odd Fibonacci
TIME: 5:35
*/

function sumFibs(num) {
  let oddSum = 0;
  let count = 1;
  while (true) {
    let fib = generateFib(count);
    if (fib > num) break;
    if (fib % 2 == 1) {
      oddSum += fib
    }
    count++;
  }
  return oddSum;
}

function generateFib(n) {
  if (n <= 0) return 0;
  if (n == 1) return 1;
  return generateFib(n - 1) + generateFib(n - 2);
}

console.log(sumFibs(4));