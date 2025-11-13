function referenceOnlyOddNumbers(numbers) {
  return numbers.filter((x) => x % 2 !== 0);
}

function referenceIncrementAllBy(numbers, value) {
  return numbers.map((x) => x + value);
}

function referenceProductOf(numbers) {
  return numbers.reduce((current, next) => current * next, 1);
}

function referenceCallOnEveryElement(numbers, callback) {
  numbers.forEach(callback);
}

function referenceAreAllEven(numbers) {
  return numbers.every((x) => x % 2 === 0);
}

function referenceAreAnyEven(numbers) {
  return numbers.some((x) => x % 2 === 0);
}

function referenceSumOfSquaresOfEvens(numbers) {
  return numbers.filter((x) => x % 2 === 0)
                .map((x) => x * x)
                .reduce((sum, next) => sum + next, 0);
}