describe("About This", function() {

  it("should use the object to the left of the dot as 'this'", function() {
    var numberGiver1 = {number: 1, giveNumber: function() { return this.number; }};
    expect(numberGiver1.giveNumber()).toEqual(FILL_ME_IN);

    var numberGiver2 = {number: 2, giveNumber: numberGiver1.giveNumber};
    expect(numberGiver2.giveNumber()).toEqual(FILL_ME_IN);
  });

  it("should use the object to the left of the brackets as 'this'", function() {
    var numberGiver1 = {number: 1, giveNumber: function() { return this.number; }};
    expect(numberGiver1["giveNumber"]()).toEqual(FILL_ME_IN);

    var numberGiver2 = {number: 2, giveNumber: numberGiver1.giveNumber};
    expect(numberGiver2["giveNumber"]()).toEqual(FILL_ME_IN);
  });

  it("should be able to use bind to ensure this gets bound to the right object", function() {
    var numberGiver1 = {
      number: 1,
      giveNumber: function() { return this.number; },
      getNewGiver: function() {
        return this.giveNumber.bind(this);
      }
    };

    var numberGiver2 = {number: 2, giveNumber: numberGiver1.getNewGiver()};
    expect(numberGiver2.giveNumber()).toEqual(FILL_ME_IN);
  });

  it("should use bind to give state transition callbacks (this is roughly in the style of React)", function() {
    var component = {
      state: {},
      render: function() { /* render this component */ },
      setState: function(newState) { this.state = newState;  /* do stuff */ this.render(); }
    };

    var stateTransitionFunction = FILL_ME_IN;

    var subComponent = {
      textField: "Hello, World",
      callback: stateTransitionFunction,
      onUserClicksButton: function() {
        this.callback({text: this.textField});
      },
      render: function() { /* render this component */ }
    }

    subComponent.onUserClicksButton();
    expect(component.state.text).toBe("Hello, World");
    subComponent.textField = "User changed this";
    subComponent.onUserClicksButton();
    expect(component.state.text).toBe(FILL_ME_IN);
  });

  // looking ahead to ES6 features
  it("should use => to bind this to the creator of an anonymous function", function() {
    var lengthChecker1 = {
      length: 10,
      lengthsToCheck: [1,3,5],
      areAllShorter: function() {
        // the argument to 'every' is an anonymous function (not a method)... 
        // so what is 'this' in this.length going to refer to?
        return this.lengthsToCheck.every(function(lengthToCheck) { return lengthToCheck < this.length});
      }
    }
    expect(lengthChecker1.areAllShorter()).toEqual(FILL_ME_IN);

    var lengthChecker2 = {
      length: 10,
      lengthsToCheck: [1,3,5],
      areAllShorter: function() {
        return this.lengthsToCheck.every((lengthToCheck) => { return lengthToCheck < this.length});
      }
    }
    expect(lengthChecker2.areAllShorter()).toEqual(FILL_ME_IN);
  });

});
