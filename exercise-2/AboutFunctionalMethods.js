describe("About Functional Methods", function () {

  function onlyOddNumbers(array) {
    // FILL_ME_IN
  }

  it("should use filter to return array items that meet a criteria", function () {
    expect(onlyOddNumbers([1,2,3])).toEqual(referenceOnlyOddNumbers([1,2,3]));
    expect(onlyOddNumbers([1,2,4])).toEqual(referenceOnlyOddNumbers([1,2,4]));
    expect(onlyOddNumbers([1,2,4,3])).toEqual(referenceOnlyOddNumbers([1,2,4,3]));
  });


  function incrementAllBy(array, value) {
    // FILL_ME_IN
  }

  it("should use 'map' to transform each element", function () {
    expect(incrementAllBy([1,2,3], 1)).toEqual(referenceIncrementAllBy([1,2,3], 1));
    expect(incrementAllBy([1,2,4], 3)).toEqual(referenceIncrementAllBy([1,2,4], 3));
  });


  function productOf(array) {
    // FILL_ME_IN
  }

  it("should use 'reduce' to update the same result on each iteration", function () {
    expect(productOf([1,2,3])).toEqual(referenceProductOf([1,2,3]));
    expect(productOf([2,3,5,7])).toEqual(referenceProductOf([2,3,5,7]));
  });


  function callOnEveryElement(numbers, callback) {
    // FILL_ME_IN
  }

  function captureForEach(array, forEachFunction) {
    var capture = [];
    forEachFunction(array, (x) => capture.push(x));
    return capture;
  }

  it("should use 'forEach' for simple iteration", function () {
    expect(captureForEach([1,2,3], callOnEveryElement)).toEqual(captureForEach([1,2,3], referenceCallOnEveryElement));
    expect(captureForEach([2,3,5,7], callOnEveryElement)).toEqual(captureForEach([2,3,5,7], referenceCallOnEveryElement));
  });


  function areAllEven(array) {
    // FILL_ME_IN
  }

  it("should use 'all' to test whether all items pass condition", function () {
    expect(areAllEven([1,2,3])).toEqual(referenceAreAllEven([1,2,3]));
    expect(areAllEven([2,4,6])).toEqual(referenceAreAllEven([2,4,6]));
  });


  function areAnyEven(array) {
    // FILL_ME_IN
  }

  it("should use 'any' to test if any items passes condition" , function () {
    expect(areAnyEven([1,2,3])).toEqual(referenceAreAnyEven([1,2,3]));
    expect(areAnyEven([1,5,3])).toEqual(referenceAreAnyEven([1,5,3]));
  });


  function sumOfSquaresOfEvens(array) {
    // FILL_ME_IN
  }

  it("should use filter, map, reduce to compute a complex operation", function() {
    expect(sumOfSquaresOfEvens([1,2,3])).toEqual(referenceSumOfSquaresOfEvens([1,2,3]));
    expect(sumOfSquaresOfEvens([1,2,3,4,5,6])).toEqual(referenceSumOfSquaresOfEvens([1,2,3,4,5,6]));
    expect(sumOfSquaresOfEvens([1,3,5])).toEqual(referenceSumOfSquaresOfEvens([1,3,5]));
  });

});

