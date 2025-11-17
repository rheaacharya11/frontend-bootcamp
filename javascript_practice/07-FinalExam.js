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
    let valid_pizzas = [];
    for (let pizza of products){
      console.log(pizza.name)
     if (
      pizza.containsNuts === false && 
      !pizza.ingredients.includes("mushrooms")
     ) {
      valid_pizzas.push(pizza);
      } 
    }
    return valid_pizzas
  }

  // use functional methods such as map, filter any
  function productsWithNoNutsOrMushroomsFunctional(products) {
    nutFree = products.filter(pizza => pizza.containsNuts === false)
    return nutFree.filter(pizza => pizza.ingredients.includes("mushrooms") == false)
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
    const inventory = {};
    for (let pizza of products){
      for (let ingredient of pizza.ingredients){
      if (inventory.hasOwnProperty(ingredient)){
        inventory[ingredient] += 1;
      }
      else {
        inventory[ingredient] = 1;
      }
    }
  }
  return inventory;
}

  // should return an object that has a property for each
  // ingredient whose value is the number of times that
  // ingredient appears in the collection of products
  // Hint: consider using reduce to flatten an array of arrays
  function countIngredientsFunctional(products) {
    return products
      .map(pizza => pizza.ingredients)
      .reduce((a, b) => a.concat(b), [])
      .reduce((counts, ingredient) => {
        counts[ingredient] = (counts[ingredient] || 0) + 1;
        return counts;
      }, {}); // initial value of accumulator
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
  function sumOfNumbersDivisibleByAnyImperative(upTo, ... divisors) {
    let acc = 0;
    for (let curr = 1; curr <= upTo; curr ++){
      for (let divisor of divisors){
        if (curr % divisor === 0){
          acc += curr;
          break;
        }
      }
    }
    return acc;
  }

  // adds up the natural numbers up to the first parameter, inclusive.
  // The caller may optionally pass more arguments, and then
  // the sum is restricted to numbers divisible by any of the
  // additional arguments
  function sumOfNumbersDivisibleByAnyFunctional(upTo, ...divisors) {
    return Array.from({length: upTo}, (_, i) => i + 1)
      .filter(n => divisors.some(divisor => n % divisor === 0))
      .reduce((acc, n) => acc + n, 0);
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
