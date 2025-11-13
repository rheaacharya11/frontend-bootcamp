describe("About Functions", function() {

  it("should declare functions", function() {

    function add(a, b) {
      return a + b;
    }

<<<<<<< HEAD
    expect(add(1, 2)).toBe(FILL_ME_IN);
=======
    expect(add(1, 2)).toBe(3);
>>>>>>> main
  });

  it("should know internal variables override outer variables", function () {
    var message = "Outer";

    function getMessage() {
      return message;
    }

    function overrideMessage() {
      var message = "Inner";
      return message;
    }

<<<<<<< HEAD
    expect(getMessage()).toBe(FILL_ME_IN);
    expect(overrideMessage()).toBe(FILL_ME_IN);
    expect(message).toBe(FILL_ME_IN);
=======
    expect(getMessage()).toBe("Outer");
    expect(overrideMessage()).toBe("Inner");
    expect(message).toBe("Outer");
>>>>>>> main
  });

  it("should have lexical scoping", function () {
    var variable = "top-level";
    function parentfunction() {
      var variable = "local";
      function childfunction() {
        return variable;
      }
      return childfunction();
    }
<<<<<<< HEAD
    expect(parentfunction()).toBe(FILL_ME_IN);
=======
    expect(parentfunction()).toBe("local");
>>>>>>> main
  });

  it("should use lexical scoping to synthesize functions", function () {

    function makeMysteryFunction(makerValue)
    {
      var newFunction = function doMysteriousThing(param)
      {
        return makerValue + param;
      };
      return newFunction;
    }

<<<<<<< HEAD
    var mysteryFunction3 = makeMysteryFunction(3);
    var mysteryFunction5 = makeMysteryFunction(5);

    expect(mysteryFunction3(10) + mysteryFunction5(5)).toBe(FILL_ME_IN);
=======
    var mysteryFunction3 = makeMysteryFunction(3); // basically this craetes a new function where u take in a param and its 3+ param
    var mysteryFunction5 = makeMysteryFunction(5);

    expect(mysteryFunction3(10) + mysteryFunction5(5)).toBe(23);
>>>>>>> main
  });

  it("should allow extra function arguments", function () {

    function returnFirstArg(firstArg) {
      return firstArg;
    }

<<<<<<< HEAD
    expect(returnFirstArg("first", "second", "third")).toBe(FILL_ME_IN);
=======
    expect(returnFirstArg("first", "second", "third")).toBe("first");
>>>>>>> main

    function returnSecondArg(firstArg, secondArg) {
      return secondArg;
    }

<<<<<<< HEAD
    expect(returnSecondArg("only give first arg")).toBe(FILL_ME_IN);
=======
    expect(returnSecondArg("only give first arg")).toBe(undefined);
>>>>>>> main

    function returnAllArgs() {
      var argsArray = [];
      for (var i = 0; i < arguments.length; i += 1) {
        argsArray.push(arguments[i]);
      }
      return argsArray.join(",");
    }

<<<<<<< HEAD
    expect(returnAllArgs("first", "second", "third")).toBe(FILL_ME_IN);
=======
    expect(returnAllArgs("first", "second", "third")).toBe("first,second,third");
>>>>>>> main
  });

  it("should pass functions as values", function () {

    var appendRules = function (name) {
      return name + " rules!";
    };

    var appendDoubleRules = function (name) {
      return name + " totally rules!";
    };

    var praiseSinger = { givePraise: appendRules };
<<<<<<< HEAD
    expect(praiseSinger.givePraise("John")).toBe(FILL_ME_IN);

    praiseSinger.givePraise = appendDoubleRules;
    expect(praiseSinger.givePraise("Mary")).toBe(FILL_ME_IN);
=======
    expect(praiseSinger.givePraise("John")).toBe("John rules!");

    praiseSinger.givePraise = appendDoubleRules;
    expect(praiseSinger.givePraise("Mary")).toBe("Mary totally rules!");
>>>>>>> main

  });
});
