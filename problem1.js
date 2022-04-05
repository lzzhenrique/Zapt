function allMultiplesBelow1000() {
  let dividend = 0;
  let total = 0;

  while (dividend < 1000) {
    if (dividend % 3 === 0 || dividend % 5 === 0) {
      total += dividend;
    }
  
    dividend += 1;
  }

  return total;
}

allMultiplesBelow1000();