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
    var safe = [];
    for (var p = 0; p < products.length; p++) {
      if (!products[p].containsNuts) {
        var hasMushrooms = false;
        for (var i = 0; i < products[p].ingredients.length; i++) {
          if (products[p].ingredients[i] === "mushrooms") {
            hasMushrooms = true;
          }
        }
        if (!hasMushrooms) {
          safe.push(products[p]);
        }
      }
    }
    return safe;
  }

  // use functional methods such as map, filter any
  function productsWithNoNutsOrMushroomsFunctional(products) {
    return products.filter(p => !(p.containsNuts || p.ingredients.some(i => i === "mushrooms")));
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
    var ingredients = {};
    for (var p = 0; p < products.length; p++) {
      for (var i = 0; i < products[p].ingredients.length; i++) {
        var ing = products[p].ingredients[i];
        ingredients[ing] = (ingredients[ing]) ? ingredients[ing] + 1 : 1; 
      }
    }
    return ingredients;
  }

  // should return an object that has a property for each
  // ingredient whose value is the number of times that
  // ingredient appears in the collection of products
  // Hint: consider using reduce to flatten an array of arrays
  function countIngredientsFunctional(products) {
    return products
      .map(p => p.ingredients) 
      .reduce((ingredients, productIngredients) => {
        productIngredients.forEach(ing => {
          ingredients[ing] = (ingredients[ing]) ? ingredients[ing] + 1 : 1;
        });
        return ingredients;
      }, {});
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
    var sum = 0;
    for (var i = 0; i <= upTo; i++) {
      if (arguments.length === 1) {
         // just add it
        sum += i; 
      }else {
        // first needs to be divisible by one of these numbers
        for (var a = 1; a < arguments.length; a++) {
          if (i % arguments[a] === 0) {
            sum += i;
            break;
          }
        }
      }
    }
    return sum;
  }

  // adds up the natural numbers up to the first parameter, inclusive.
  // The caller may optionally pass more arguments, and then
  // the sum is restricted to numbers divisible by any of the
  // additional arguments
  function sumOfNumbersDivisibleByAnyFunctional(upTo) {
    var divisibleBy = Array.prototype.splice.call(arguments, 1); // convert to real array
    var numbers = Array.from(new Array(upTo + 1).keys());
    return numbers.reduce(function(sum, n) {
      if (divisibleBy.length === 0 ||
          divisibleBy.some(function (factor) { return n % factor === 0; })) {
        return sum + n;
      }else {
        return sum;
      }
    }, 0);
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
