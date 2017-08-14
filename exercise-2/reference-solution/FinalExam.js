// see ../FinalExam.js for what the structure of the products variable is

// use standard for and if control structures
function referenceProductsWithNoNutsOrMushroomsImperative(products) {
  var edibleProducts = [];
  for (var i = 0; i < products.length; i++) {
    if (!products[i].containsNuts) {
      var hasMushrooms = false;
      for (var j = 0; j < products[i].ingredients.length; j++) {
        if (products[i].ingredients[j] === "mushrooms") {
          hasMushrooms = true;
        }
      }
      if (!hasMushrooms) {
        edibleProducts.push(products[i]);
      }
    }
  }
  return edibleProducts;
}

// use functional methods such as map, filter any
function referenceProductsWithNoNutsOrMushroomsFunctional(products) {
  return products.filter((product) => {
    return !(product.containsNuts) && !product.ingredients.some((ingredient) => {
      return ingredient === "mushrooms";
    });
  });
}

// should return an object that has a property for each
// ingredient whose value is the number of times that
// ingredient appears in the collection of products
function referenceCountIngredientsImperative(products) {
  var counts = {};
  for (var i = 0; i < products.length; i++) {
    for (var j = 0; j < products[i].ingredients.length; j++) {
      var ingredient = products[i].ingredients[j];
      if (ingredient in counts) {
        counts[ingredient]++;
      } else {
        counts[ingredient] = 1;
      }
    }
  }
  return counts;
}

// should return an object that has a property for each
// ingredient whose value is the number of times that
// ingredient appears in the collection of products
// Hint: consider using reduce to flatten an array of arrays
function referenceCountIngredientsFunctional(products) {
  return products.map((product) => product.ingredients)
    .reduce((allIngredients, nextIngredients) => allIngredients.concat(nextIngredients), [])
    .reduce((counts, nextIngredient) => {
      counts[nextIngredient] = (counts[nextIngredient] || 0) + 1;
      return counts;
    }, {});
}

// adds up the natural numbers up to the first parameter.
// The caller may optionally pass more arguments, and then
// the sum is restricted to numbers divisible by any of the
// additionaly arguments
function referenceSumOfNumbersDivisibleByAnyImperative(upTo) {
  var factors = Array.prototype.slice.call(arguments, 1);
  var sum = 0;
  for (var i = 1; i <= upTo; i++) {
    var toAdd = 0;
    if (factors.length > 0) {
      for (var j = 0; j < factors.length; j++) {
        if (i % factors[j] === 0) {
          toAdd = i;
        }
      }
    } else {
      toAdd = i;
    }
    sum += toAdd;
  }
  return sum;
}

// adds up the natural numbers up to the first parameter.
// The caller may optionally pass more arguments, and then
// the sum is restricted to numbers divisible by any of the
// additionaly arguments
function referenceSumOfNumbersDivisibleByAnyFunctional(upTo) {
  var factors = Array.prototype.slice.call(arguments, 1);
  return Array.from(Array(upTo+1).keys())
    .filter((x) => factors.length === 0 || factors.some((y) => x % y === 0))
    .reduce((sum, x) => sum + x, 0);
}