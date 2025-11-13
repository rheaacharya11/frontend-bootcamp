describe("About Arrays", function() {

  it("should create arrays", function() {
    var emptyArray = [];
    // Considered by most to be a design mistake that arrays don't have their own type
<<<<<<< HEAD
    expect(typeof(emptyArray)).toBe(FILL_ME_IN);
    // Alternative test available since ES5
    expect(Array.isArray(emptyArray)).toBe(FILL_ME_IN);
    
    // is an empty array truthy?
    expect(Boolean(emptyArray)).toBe(FILL_ME_IN);
    expect(emptyArray.length).toBe(FILL_ME_IN);

    var multiTypeArray = [0, 1, "two", function () { return 3; }, {value1: 4, value2: 5}, [6, 7]];
    expect(multiTypeArray[0]).toBe(FILL_ME_IN);
    expect(multiTypeArray[2]).toBe(FILL_ME_IN);
    expect(multiTypeArray[3]()).toBe(FILL_ME_IN);
    expect(multiTypeArray[4].value1).toBe(FILL_ME_IN);
    expect(multiTypeArray[4]["value2"]).toBe(FILL_ME_IN);
    expect(multiTypeArray[5][0]).toBe(FILL_ME_IN);
=======
    expect(typeof(emptyArray)).toBe('object'); // arrays are objects in javascript
    // Alternative test available since ES5
    expect(Array.isArray(emptyArray)).toBe(true);
    
    // is an empty array truthy?
    expect(Boolean(emptyArray)).toBe(true); // it is truthy!
    expect(emptyArray.length).toBe(0); 

    var multiTypeArray = [0, 1, "two", function () { return 3; }, {value1: 4, value2: 5}, [6, 7]];
    expect(multiTypeArray[0]).toBe(0);
    expect(multiTypeArray[2]).toBe("two");
    expect(multiTypeArray[3]()).toBe(3); //it's the return value of that part of the array
    expect(multiTypeArray[4].value1).toBe(4);
    expect(multiTypeArray[4]["value2"]).toBe(5);
    expect(multiTypeArray[5][0]).toBe(6);
>>>>>>> main
  });

  it("should understand array literals", function () {
    var array = [];
    expect(array).toEqual([]);

    array[0] = 1;
    expect(array).toEqual([1]);

    array[1] = 2;
<<<<<<< HEAD
    expect(array).toEqual([1, FILL_ME_IN]);

    array.push(3);
    expect(array).toEqual(FILL_ME_IN);
=======
    expect(array).toEqual([1, 2]);

    array.push(3);
    expect(array).toEqual([1, 2, 3]);
>>>>>>> main
  });

  it("should understand array length", function () {
    // first, behavior you probably expect of arrays
    var fourNumberArray = [1, 2, 3, 4];
<<<<<<< HEAD
    expect(fourNumberArray.length).toBe(FILL_ME_IN);
    fourNumberArray.push(5, 6);
    expect(fourNumberArray.length).toBe(FILL_ME_IN);

    var tenEmptyElementArray = new Array(10);
    expect(tenEmptyElementArray.length).toBe(FILL_ME_IN);
=======
    expect(fourNumberArray.length).toBe(4);
    fourNumberArray.push(5, 6);
    expect(fourNumberArray.length).toBe(6);

    var tenEmptyElementArray = new Array(10);
    expect(tenEmptyElementArray.length).toBe(10);
>>>>>>> main

    // however, javascript array values don't need to be contiguous
    // and so length is just one more than the max index
    var sparseArray = [];
    sparseArray[2] = "two";    
    sparseArray[4] = "four";
<<<<<<< HEAD
    expect(sparseArray.length).toBe(FILL_ME_IN);    

    // you can also assign to length (which is more often done accidentally)
    // which has various side-effects
    sparseArray.length = 3;
    expect(sparseArray.length).toBe(FILL_ME_IN);
    expect(sparseArray[4]).toBe(FILL_ME_IN);
    sparseArray.length = 5;
    expect(sparseArray[4]).toBe(FILL_ME_IN);    
=======
    expect(sparseArray.length).toBe(5);    

    // you can also assign to length (which is more often done accidentally)
    // which has various side-effects
    sparseArray.length = 3; // array is truncated at this step
    expect(sparseArray.length).toBe(3); 
    expect(sparseArray[4]).toBe(undefined);
    sparseArray.length = 5;
    expect(sparseArray[4]).toBe(undefined);     // because it forgot that we have a 4?
>>>>>>> main
  });

  it("should slice arrays", function () {
    var array = ["peanut", "butter", "and", "jelly"];

<<<<<<< HEAD
    expect(array.slice(0, 1)).toEqual(FILL_ME_IN);
    expect(array.slice(0, 2)).toEqual(FILL_ME_IN);
    expect(array.slice(2, 2)).toEqual(FILL_ME_IN);
    expect(array.slice(2, 20)).toEqual(FILL_ME_IN);
    expect(array.slice(3, 0)).toEqual(FILL_ME_IN);
    expect(array.slice(3, 100)).toEqual(FILL_ME_IN);
    expect(array.slice(5, 1)).toEqual(FILL_ME_IN);
=======
    expect(array.slice(0, 1)).toEqual(["peanut"]);
    expect(array.slice(0, 2)).toEqual(["peanut", "butter"]);
    expect(array.slice(2, 2)).toEqual([]);
    expect(array.slice(2, 20)).toEqual(["and", "jelly"]);
    expect(array.slice(3, 0)).toEqual([]); // slice is empty is the start index is greater than or equal to the end index
    expect(array.slice(3, 100)).toEqual(["jelly"]);
    expect(array.slice(5, 1)).toEqual([]);
>>>>>>> main
  });

  it("should know array references", function () {
    var array = [ "zero", "one", "two", "three", "four", "five" ];

    function passedByReference(refArray) {
        refArray[1] = "changed in function";
    }
    passedByReference(array);
<<<<<<< HEAD
    expect(array[1]).toBe(FILL_ME_IN);

    var assignedArray = array;
    assignedArray[5] = "changed in assignedArray";
    expect(array[5]).toBe(FILL_ME_IN);

    var copyOfArray = array.slice();
    copyOfArray[3] = "changed in copyOfArray";
    expect(array[3]).toBe(FILL_ME_IN);
=======
    expect(array[1]).toBe("changed in function");

    var assignedArray = array;
    assignedArray[5] = "changed in assignedArray";
    expect(array[5]).toBe("changed in assignedArray");

    var copyOfArray = array.slice();
    copyOfArray[3] = "changed in copyOfArray";
    expect(array[3]).toBe("three"); // because it only changed the copy
>>>>>>> main
  });

  it("should push and pop", function () {
    var array = [1, 2];
    array.push(3);

<<<<<<< HEAD
    expect(array).toEqual(FILL_ME_IN);

    var poppedValue = array.pop();
    expect(poppedValue).toBe(FILL_ME_IN);
    expect(array).toEqual(FILL_ME_IN);
=======
    expect(array).toEqual([1, 2, 3]);

    var poppedValue = array.pop();
    expect(poppedValue).toBe(3);
    expect(array).toEqual([1, 2]);
>>>>>>> main
  });

  it("should know about shifting arrays", function () {
    var array = [1, 2];

<<<<<<< HEAD
    array.unshift(3);
    expect(array).toEqual(FILL_ME_IN);

    var shiftedValue = array.shift();
    expect(shiftedValue).toEqual(FILL_ME_IN);
    expect(array).toEqual(FILL_ME_IN);
=======
    array.unshift(3); //unshift adds elements to the frnot
    expect(array).toEqual([3, 1, 2]);

    var shiftedValue = array.shift(); //removes the first element and returns that element
    expect(shiftedValue).toEqual(3);
    expect(array).toEqual([1, 2]);
>>>>>>> main
  });

  it("should know about array toString", function() {
    var arr = [1, 'two', [3, 4]];
    // array toString will give a list of values, but 
    // no quotes around string values, no spaces after commas, 
    // and no []s around the array
<<<<<<< HEAD
    expect(arr.toString()).toBe(FILL_ME_IN);
=======
    expect(arr.toString()).toBe("1,two,3,4"); // so we do array to string recursively?
>>>>>>> main
  });

  it("should know that there are different ways to loop over an array", function() {
    var arr = ['one', 'two', 'three'];
    var stack = [];
    
    //the classic for(;;) loop 
    for (var i = 0; i < arr.length; i++){
      stack.push(arr[i]);
    }
<<<<<<< HEAD
    expect(stack.toString()).toBe(FILL_ME_IN);
=======
    expect(stack.toString()).toBe('one,two,three');
>>>>>>> main
    
    // for-in is designed for objects, not arrays -- it loops over keys, not values
    // Each index in an array is also a key in the array object
    stack = [];
    for (var key in arr) {
      stack.push(key);
    }
<<<<<<< HEAD
    expect(stack.toString()).toBe(FILL_ME_IN);
=======
    expect(stack.toString()).toBe('0,1,2');
>>>>>>> main
  });

  it("should know that arrays are also objects", function() {
    var arr = ['zero', 'one', 'two', 'three'];

    //as with any object, you add additional properties (key/value pairs)
    arr['foo'] = 'bar';
    arr['2'] = 'X';
        
    var stack = [];
    for (var i = 0; i < arr.length; i++){
      stack.push(arr[i]);
    }
<<<<<<< HEAD
    expect(stack.toString()).toBe(FILL_ME_IN);
    expect(arr['foo']).toBe(FILL_ME_IN);        
=======
    expect(stack.toString()).toBe('zero,one,X,three');
    expect(arr['foo']).toBe('bar');    // added a property to object but not an element to core array    
>>>>>>> main
  });
});
