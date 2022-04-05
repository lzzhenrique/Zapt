const isEven = (number) => {
  if (number % 2 === 0) return number;

  return 0;
};

function sumEvensBellowFourMillion() {
  const MAX_RANGE = 4000000;
  const fiboSequence = [1, 2];
  let pointer = 0;
  let total = 0;

  while (fiboSequence[0] < MAX_RANGE && fiboSequence[1] < MAX_RANGE) {
    fiboSequence[pointer] = fiboSequence[0] + fiboSequence[1];

    total += isEven(fiboSequence[pointer]);

    pointer = pointer ? 0 : 1;
  }

  return total;
}

sumEvensBellowFourMillion();
