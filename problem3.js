function isPrime(number, divisor) {
  if (number % divisor === 0 && divisor !== number) {
    return false;
  }
  return true;
}

function findPrimeNumber(originalNumber) {
  let divisor = 2;
  let number = originalNumber;

  while (divisor <= number) {
    if (!isPrime(number, divisor)) {
      number += 1;
      divisor = 2;
    }
    divisor += 1;
  }

  return number;
}

function findGreaterPrimeFactor() {
  let number = 2;
  let quotient = 600851475143;
  let greaterPrime = null;
  
  while (quotient !== 1) {
    const prime = findPrimeNumber(number);
    const rest = quotient % prime;

    if (rest === 0) {
      quotient /= prime;
      greaterPrime = prime;
    } else {
      prime > number ? number = prime + 1 : number += 1;
    }
  }

  return greaterPrime;
}

findGreaterPrimeFactor();
