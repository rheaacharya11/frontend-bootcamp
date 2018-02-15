describe("About Functional Programming", function () {

  // The functions we'll ask you to use here (filter, map, reduce, forEach, etc)
  // are now available as Array methods.  See details/docs here for more info:
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

  function onlyOddNumbers(array) {
    return array.filter(function(v) { return v % 2 === 1 });
  }

  it("should use 'filter' to return array items that meet a criteria", function () {
    expect(onlyOddNumbers([1,2,3])).toEqual(referenceOnlyOddNumbers([1,2,3]));
    expect(onlyOddNumbers([1,2,4])).toEqual(referenceOnlyOddNumbers([1,2,4]));
    expect(onlyOddNumbers([1,2,4,3])).toEqual(referenceOnlyOddNumbers([1,2,4,3]));
  });


  function incrementAllBy(array, value) {
    return array.map(function (v) {
      return v + value;
    })
  }

  it("should use 'map' to transform each element", function () {
    expect(incrementAllBy([1,2,3], 1)).toEqual(referenceIncrementAllBy([1,2,3], 1));
    expect(incrementAllBy([1,2,4], 3)).toEqual(referenceIncrementAllBy([1,2,4], 3));
  });


  function productOf(array) {
    return array.reduce(function (total, next) {
      return total *= next;
    }, 1);
  }

  it("should use 'reduce' to update the same result on each iteration", function () {
    expect(productOf([1,2,3])).toEqual(referenceProductOf([1,2,3]));
    expect(productOf([2,3,5,7])).toEqual(referenceProductOf([2,3,5,7]));
  });


  function callOnEveryElement(numbers, callback) {
    numbers.forEach(callback);
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
    return array.every(function (value) { return value % 2 === 0 });
  }

  it("should use 'every' to test whether all items pass condition", function () {
    expect(areAllEven([1,2,3])).toEqual(referenceAreAllEven([1,2,3]));
    expect(areAllEven([2,4,6])).toEqual(referenceAreAllEven([2,4,6]));
  });


  function areAnyEven(array) {
    return array.some(function (value) { return value % 2 === 0 });
  }

  it("should use 'some' to test if any items passes condition" , function () {
    expect(areAnyEven([1,2,3])).toEqual(referenceAreAnyEven([1,2,3]));
    expect(areAnyEven([1,5,3])).toEqual(referenceAreAnyEven([1,5,3]));
  });


  function sumOfSquaresOfEvens(array) {
    var evens = array.filter(function (value) { return value % 2 === 0; });
    var squaresOfEvens = evens.map(function (value) { return value * value; });
    return squaresOfEvens.reduce(function (acc, value) { return acc + value; }, 0);
  }

  it("should use filter, map, reduce to compute a complex operation", function() {
    expect(sumOfSquaresOfEvens([1,2,3])).toEqual(referenceSumOfSquaresOfEvens([1,2,3]));
    expect(sumOfSquaresOfEvens([1,2,3,4,5,6])).toEqual(referenceSumOfSquaresOfEvens([1,2,3,4,5,6]));
    expect(sumOfSquaresOfEvens([1,3,5])).toEqual(referenceSumOfSquaresOfEvens([1,3,5]));
  });

});

