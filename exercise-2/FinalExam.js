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

  it("given I'm allergic to nuts and hate mushrooms, it should find a pizza I can eat (imperative)", function () {
    expect(productsWithNoNutsOrMushroomsImperative(products))
      .toEqual(referenceProductsWithNoNutsOrMushroomsImperative(products));
  });

  it("given I'm allergic to nuts and hate mushrooms, it should find a pizza I can eat (functional)", function () {
    expect(productsWithNoNutsOrMushroomsFunctional(products))
      .toEqual(referenceProductsWithNoNutsOrMushroomsFunctional(products));
  });

  /*********************************************************************************/

   it("should count the ingredient occurrence (imperative)", function () {
    expect(countIngredientsImperative(products))
      .toEqual(referenceCountIngredientsImperative(products));
  });

  it("should count the ingredient occurrence (functional)", function () {
    expect(countIngredientsFunctional(products))
      .toEqual(referenceCountIngredientsFunctional(products));
  });

  /*********************************************************************************/

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
