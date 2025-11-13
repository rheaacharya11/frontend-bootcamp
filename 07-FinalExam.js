describe("About The Final Exam", function() {

  var products;

  beforeEach(function () {
    products = [
       { name: "Sonoma", ingredients: ["artichoke", "sundried tomatoes", "mushrooms"], containsNuts: false },
       { name: "Pizza Primavera", ingredients: ["roma", "sundried tomatoes", "goats cheese", "rosemary"], containsNuts: false },
       { name: "South Of The Border", ingredients: ["black beans", "jalapenos", "mushrooms"], containsNuts: false },
       { name: "Blue Moon", ingredients: ["blue cheese", "garlic", "walnuts"], containsNuts: true },
       { name: "Taste Of Athens", ingredients: ["spinach", "kalamata olives", "sesame seeds"], containsNuts: true }
    ];
  });

  /*********************************************************************************/

  // use standard for and if control structures
  function productsWithNoNutsOrMushroomsImperative(products) {

  }

  // use functional methods such as map, filter any
  function productsWithNoNutsOrMushroomsFunctional(products) {
    // FILL_ME_IN
  }

  it("given I'm allergic to nuts and hate mushrooms, it should find a pizza I can eat (imperative)", function () {
    expect(productsWithNoNutsOrMushroomsImperative(products))
      .toEqual(referenceProductsWithNoNutsOrMushroomsImperative(products));
  });

  it("given I'm allergic to nuts and hate mushrooms, it should find a pizza I can eat (functional)", function () {
    expect(productsWithNoNutsOrMushroomsFunctional(products))
      .toEqual(referenceProductsWithNoNutsOrMushroomsFunctional(products));
  });

  /*********************************************************************************/

  // should return an object that has a property for each
  // ingredient whose value is the number of times that
  // ingredient appears in the collection of products
  function countIngredientsImperative(products) {
    // FILL_ME_IN
  }

  // should return an object that has a property for each
  // ingredient whose value is the number of times that
  // ingredient appears in the collection of products
  // Hint: consider using reduce to flatten an array of arrays
  function countIngredientsFunctional(products) {
    // FILL_ME_IN
  }

  it("should count the ingredient occurrence (imperative)", function () {
    expect(countIngredientsImperative(products))
      .toEqual(referenceCountIngredientsImperative(products));
  });

  it("should count the ingredient occurrence (functional)", function () {
    expect(countIngredientsFunctional(products))
      .toEqual(referenceCountIngredientsFunctional(products));
  });

  /*********************************************************************************/

  // adds up the natural numbers up to the first parameter, inclusive.
  // The caller may optionally pass more arguments, and then
  // the sum is restricted to numbers divisible by any of the
  // additional arguments
  function sumOfNumbersDivisibleByAnyImperative(upTo) {
    // FILL_ME_IN
  }

  // adds up the natural numbers up to the first parameter, inclusive.
  // The caller may optionally pass more arguments, and then
  // the sum is restricted to numbers divisible by any of the
  // additional arguments
  function sumOfNumbersDivisibleByAnyFunctional(upTo) {
    // FILL_ME_IN
  }

  it("should add all the natural numbers up to 1000 that are multiples of 3 or 5 (imperative)", function () {
    expect(sumOfNumbersDivisibleByAnyImperative(1000, 3, 5))
      .toBe(referenceSumOfNumbersDivisibleByAnyImperative(1000, 3, 5));
  });

  it("should add all the natural numbers up to 1000 that are multiples of 3 or 5 (functional)", function () {
    expect(sumOfNumbersDivisibleByAnyFunctional(1000, 3, 5))
      .toBe(referenceSumOfNumbersDivisibleByAnyFunctional(1000, 3, 5));
  });

  /*********************************************************************************/
});
