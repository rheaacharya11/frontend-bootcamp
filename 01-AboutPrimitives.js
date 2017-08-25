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
    expect(typeof 3).toBe(FILL_ME_IN);
    
    // this can cause you some trouble sometimes
    expect(0.1 + 0.2).toBe(FILL_ME_IN);

    // and sometimes you might have expected integer math
    expect(-5 / 4).toBe(FILL_ME_IN);
        
    // there is a Math library that may be of assitance here
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
    var intMath = Math.trunc(-5 / 4);
    expect(intMath).toBe(FILL_ME_IN);

    // there are some special number values that usually indicate errors
    // One is NaN...
    expect(isNaN(4 - "three")).toBe(true);  // NaN !== NaN, so need to use isNaN(x) to test for it
    // But there are other special values...
    expect(4 / 0).toBe(FILL_ME_IN);
  });

  it('should understand strings', function() {
    // Strings have their own type
    expect(typeof "hello").toBe(FILL_ME_IN);

    // you can use different kinds of quotes (since there is no character type)
    expect(typeof 'h').toBe(FILL_ME_IN);
    
    // using the String class constructor gives you something else, though
    expect(typeof new String('hello')).toBe(FILL_ME_IN);
    
    // unlike numbers and booleans, strings have methods
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
    expect('hello'.indexOf('e')).toBe(FILL_ME_IN);

    // and they are array-like
    expect('hello'.length).toBe(FILL_ME_IN);
    expect('hello'[4]).toBe(FILL_ME_IN);

    // you can concatenate them using +
    expect('high' + "low").toBe(FILL_ME_IN);
    expect('high' + 5).toBe(FILL_ME_IN);
  });
    
  it('should understand equality', function() {
    // == (and !=) will coerce types for you
    expect(1 == true).toBe(FILL_ME_IN);    
    expect(2 + 3 == '5').toBe(FILL_ME_IN);
    expect('hello' == new String('hello')).toBe(FILL_ME_IN);
    
    // but this means == can't guarantee transitivity
    expect('0' == 0).toBe(FILL_ME_IN);
    expect(0 == '').toBe(FILL_ME_IN); 
    expect('0' == '').toBe(FILL_ME_IN);
    expect(false == '0').toBe(FILL_ME_IN);
    expect(('0') ? true : false).toBe(FILL_ME_IN);  // ternary operator
    
    // === (and !==) will not coerce types, and so is generally much preferred
    expect(1 === true).toBe(FILL_ME_IN);
    expect(2 + 3 === '5').toBe(FILL_ME_IN);
    expect('hello' === new String('hello')).toBe(FILL_ME_IN);   
  });

  it('should understand booleans and truthiness', function() {
    // there are only two boolean literals: true or false
    expect(typeof false).toBe(FILL_ME_IN);

    // when a value is used as part of a test, it can be truthy or falsy
    var word = (1) ? "yes" : "no";  
    expect(word).toBe(FILL_ME_IN);

    // you can use Boolean() to convert to a primitive boolean based on a value's "truthiness"
    expect(Boolean('hello')).toBe(FILL_ME_IN);

    // note that this is not the same as creating a new Boolean wrapper object
    expect(new Boolean('hello') === true).toBe(FILL_ME_IN);
    
    // double-negative is another way to convert a value to a boolean
    expect(!!1 === true).toBe(FILL_ME_IN);

    // Among strings, numbers, and booleans, what are falsy values?
    var falsy = [FILL_ME_IN, FILL_ME_IN, FILL_ME_IN, FILL_ME_IN, null, undefined];
    // Hint: 2 number values, 1 boolean value, one string value
    for (var i = 0; i < falsy.length; i++) {
      expect(falsy[i]).toBeFalsy();
    }
    // all other values are truthy (including empty arrays and objects)
  });
});
