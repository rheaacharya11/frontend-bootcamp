describe('About Primitives', function() {

   // The commonly used "primitive" types in Javascript are:
   // number, boolean, and string.  (I use "primitive" loosely here; 
   // the term does not have the same meaning here as it does in Java.)

   // There are then arrays, objects, and functions (which are all objects)

   // There is also built-in support for Regex and Date (which we won't cover here)

   // Let's start by exploring the "primitives" a bit...

  it('should understand numbers', function() {
    // there is is no separate integer type
    expect(typeof 3.14).toBe('number');
    expect(typeof 3).toBe('number');
    
    // this can cause you some trouble sometimes
    expect(0.1 + 0.2).toBe(0.1 + 0.2);

    // and sometimes you might have expected integer math
    expect(-5 / 4).toBe(-1.25);
        
    // there is a Math library that may be of assistance here
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
    var intMath = Math.trunc(-5 / 4);
    expect(intMath).toBe(-1);

    // there are some special number values that usually indicate errors
    // One is NaN...
    expect(isNaN(4 - "three")).toBe(true);  // NaN !== NaN, so need to use isNaN(x) to test for it
    // But there are other special values...
    expect(4 / 0).toBe(Infinity);
  });

  it('should understand strings', function() {
    // Strings have their own type
    expect(typeof "hello").toBe('string');

    // you can use different kinds of quotes (since there is no character type)
    expect(typeof 'h').toBe('string');
    
    // using the String class constructor gives you something else, though
    expect(typeof new String('hello')).toBe('object');
    
    // unlike numbers and booleans, strings have methods
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
    expect('hello'.indexOf('e')).toBe(1);

    // and they are array-like
    expect('hello'.length).toBe(5);
    expect('hello'[4]).toBe('o');

    // you can concatenate them using +
    expect('high' + "low").toBe('highlow');
    expect('high' + 5).toBe('high5');
  });
    
  it('should understand equality', function() {
    // == (and !=) will coerce types for you
    expect(1 == true).toBe(true);    // double equals will perform a type conversion
    expect(2 + 3 == '5').toBe(true);
    expect('hello' == new String('hello')).toBe(true);
    
    // but this means == can't guarantee transitivity
    expect('0' == 0).toBe(true);
    expect(0 == '').toBe(true); // we convert the string to a number
    expect('0' == '').toBe(false);
    expect(false == '0').toBe(true); // convert boolean to a number
    expect(('0') ? true : false).toBe(true);  // ternary operator // all non-empty strings are truthy
    
    // === (and !==) will not coerce types, and so is generally much preferred
    expect(1 === true).toBe(false);
    expect(2 + 3 === '5').toBe(false);
    expect('hello' === new String('hello')).toBe(false);   
  });

  it('should understand booleans and truthiness', function() {
    // there are only two boolean literals: true or false
    expect(typeof false).toBe('boolean');

    // when a value is used as part of a test, it can be truthy or falsy
    var word = (1) ? "yes" : "no";  
    expect(word).toBe("yes");

    // you can use Boolean() to convert to a primitive boolean based on a value's "truthiness"
    expect(Boolean('hello')).toBe(true);

    // note that this is not the same as creating a new Boolean wrapper object
    expect(new Boolean('hello') === true).toBe(false);
    
    // double-negative is another way to convert a value to a boolean
    expect(!!1 === true).toBe(true);

    // Among strings, numbers, and booleans, what are falsy values?
    var falsy = [0, "", false, !!0, null, undefined];
    // Hint: 2 number values, 1 boolean value, one string value
    for (var i = 0; i < falsy.length; i++) {
      expect(falsy[i]).toBeFalsy();
    }
    // all other values are truthy (including empty arrays and objects)
  });
});
