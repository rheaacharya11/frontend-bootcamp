describe("About This", function() {

  it("should know that `this` gets set at runtime to obj by obj.method call", function() {
    var getThis = function() {
      return this;
    }
    var obj1 = {
      getMe: getThis
    }
    var obj2 = {
      getMe: getThis
    }    

    expect(getThis()).toBe(window);  // window == the global object in a browser
    expect(obj1.getMe()).toBe(FILL_ME_IN);  // which obj?
    expect(obj2.getMe()).toBe(FILL_ME_IN);  
  });

  it("should know that an unbound `this` will affect the global object", function() {
    var numberStorage = function(val) {
      this.num = val; 
    }
    numberStorage(3);
    expect(num).toEqual(FILL_ME_IN);  // testing newly created global variable! 
  });  

  it("should understand that member access depends on the current this", function() {
    // numberGiver1 has its own number and its own giveNumber method
    var numberGiver1 = {
      number: 1, 
      giveNumber: function() { 
        return this.number;
      }
    };
    expect(numberGiver1.giveNumber()).toEqual(FILL_ME_IN);

    // numberGiver2 has its own number and a copied/shared giveNumber method
    var numberGiver2 = {
      number: 2, 
      giveNumber: numberGiver1.giveNumber
    };
    expect(numberGiver2.giveNumber()).toEqual(FILL_ME_IN);

    // numberGiver3 has no number of its own
    var numberGiver3 = {
      giveNumber: numberGiver1.giveNumber
    };
    expect(numberGiver3.giveNumber()).toEqual(FILL_ME_IN);

    window.number = 5;  // set global number variable (Hint: relevant this time?)
    expect(numberGiver3.giveNumber()).toEqual(FILL_ME_IN);
  });

  it("should use the object to the left of the brackets as 'this'", function() {
    var numberGiver1 = {number: 1, giveNumber: function() { return this.number; }};
    expect(numberGiver1["giveNumber"]()).toEqual(FILL_ME_IN);

    var numberGiver2 = {number: 2, giveNumber: numberGiver1.giveNumber};
    expect(numberGiver2["giveNumber"]()).toEqual(FILL_ME_IN);
  });

  it("should use bind to ensure this gets bound to the right object", function() {
    var getThis = function() {
      return this;  
    }
    var obj1 = {'some': 'thing'}
    var boundGetThis = getThis.bind(obj1);
    expect(boundGetThis()).toEqual(FILL_ME_IN); 

    var numberGiver1 = {
      number: 1,
      giveNumber: function() { 
        return this.number; 
      },
    };

    var numberGiver2 = {
      number: 2, 
      giveNumber: numberGiver1.giveNumber.bind(numberGiver1)  // this bound to numberGiver1
    };
    expect(numberGiver2.giveNumber()).toEqual(FILL_ME_IN);
  });


  it("should know to bind this to the creator of an anonymous funtion", function() {
    // no explicit this binding
    var lengthChecker1 = {
      length: 10,
      lengthsToCheck: [1,3,5],
      areAllShorter: function() {
        return this.lengthsToCheck.every(function(lengthToCheck) { 
          // `every` will call this anonymous function as just a function, not as a method
          // so what will this be bound to?
          return lengthToCheck < this.length
        });
      }
    }
    expect(lengthChecker1.areAllShorter()).toEqual(FILL_ME_IN);

    // calling bind method on the anonymous function
    var lengthChecker2 = {
      length: 10,
      lengthsToCheck: [1,3,5],
      areAllShorter: function() {
        return this.lengthsToCheck.every((function(lengthToCheck) { 
          return lengthToCheck < this.length
        }).bind(this));
      }
    }
    expect(lengthChecker2.areAllShorter()).toEqual(FILL_ME_IN);

    // using that = this -- a commonly-seen old-school approach to this problem
    var lengthChecker3 = {
      length: 10,
      lengthsToCheck: [1,3,5],
      areAllShorter: function() {
        var that = this;  // save current this
        return this.lengthsToCheck.every(function(lengthToCheck) { 
          // use closure to bind around that
          return lengthToCheck < that.length  
        });
      }
    }
    expect(lengthChecker3.areAllShorter()).toEqual(FILL_ME_IN);

    // => arrow functions are a welcome addition in ES6 Javascript:
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
    // An => function binds this to the `this` defined outside of the function
    var lengthChecker4 = {
      length: 10,
      lengthsToCheck: [1,3,5],
      areAllShorter: function() {
        return this.lengthsToCheck.every((lengthToCheck) => { 
          return lengthToCheck < this.length
        });
      }
    }
    expect(lengthChecker4.areAllShorter()).toEqual(FILL_ME_IN);
  });

  it("should use bind to give state transition callbacks", function() { 
    // callbacks get used a lot in timeouts, responding to user actions, and React state managment

    var component = {
      state: 0,
      increment: function(by) {
        this.state += by
      },
      getIncrementCallback: FILL_ME_IN  // to call increment(by) on this object
    };

    var callback = component.getIncrementCallback();
    callback(1);
    expect(component.state).toBe(1);
    callback(2);
    expect(component.state).toBe(3);    
  });
});
