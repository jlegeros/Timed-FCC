/*
CareerDevs Timed algorithm challenge
freeCodeCamp - Sum All Primes
TIME: 2:51
*/

function sumPrimes(num) {
  let sum = 0;
  for (let i = 2; i <= num; i++) {
    if (determineIfPrime(i)) {
      sum += i;
    }
  }
  return sum;
}

function determineIfPrime(n) {
  for (let i = 2; i < n; i++) {
    if (n % i == 0) {
      return false;
    }
  }
  return true;
}

console.log(sumPrimes(10));