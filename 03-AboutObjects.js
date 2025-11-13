describe("About Objects", function () {

  describe("should know object basics", function() {

    it("should know object and placeholder types", function () {
<<<<<<< HEAD
      expect(typeof {}).toBe(FILL_ME_IN);
      expect(typeof undefined).toBe(FILL_ME_IN);
      expect(typeof null).toBe(FILL_ME_IN);      
=======
      expect(typeof {}).toBe('object');
      expect(typeof undefined).toBe('undefined');
      expect(typeof null).toBe('object');      
>>>>>>> main
    });

    it("should know object truthiness", function () {
      var objects = [undefined, null, {}, {'one': 1}];
      // fill in true or false for each matching object above
<<<<<<< HEAD
      var truthiness = [FILL_ME_IN, FILL_ME_IN, FILL_ME_IN, FILL_ME_IN];
=======
      var truthiness = [false, false, true, true];
>>>>>>> main
      for (var i = 0; i < objects.length; i++){
        expect(Boolean(objects[i])).toBe(truthiness[i]);
      }
    });

  });

  describe("should know objects have properties", function () {
    var megalomaniac;

    beforeEach(function () {
       megalomaniac = {  mastermind: "Joker", henchwoman: "Harley" };
    });

    it("should confirm objects are collections of properties", function () {
      var sidekick = 'henchwoman';
      // with different ways to access
<<<<<<< HEAD
      expect(megalomaniac['mastermind']).toBe(FILL_ME_IN);
      expect(megalomaniac.mastermind).toBe(FILL_ME_IN);
      expect(megalomaniac[sidekick]).toBe(FILL_ME_IN);
      // but what do you get when the property doesn't exist?
      expect(megalomaniac.nemesis).toBe(FILL_ME_IN);      
    });

    it("should confirm that properties are case sensitive", function () {
      expect(megalomaniac.henchwoman).toBe(FILL_ME_IN);
      expect(megalomaniac.henchWoman).toBe(FILL_ME_IN);
=======
      expect(megalomaniac['mastermind']).toBe("Joker");
      expect(megalomaniac.mastermind).toBe("Joker");
      expect(megalomaniac[sidekick]).toBe('Harley');
      // but what do you get when the property doesn't exist?
      expect(megalomaniac.nemesis).toBe(undefined);      
    });

    it("should confirm that properties are case sensitive", function () {
      expect(megalomaniac.henchwoman).toBe("Harley");
      expect(megalomaniac.henchWoman).toBe(undefined);
>>>>>>> main
    });

    it("should confirm that properties always keyed as strings", function () {
      megalomaniac[2] = 'two';
      megalomaniac[3 < 4] = 'five';
      megalomaniac[{object: true}] = 'bad idea';
<<<<<<< HEAD
      expect(megalomaniac['2']).toBe(FILL_ME_IN);
      expect(megalomaniac['true']).toBe(FILL_ME_IN);
      // all objects have the same toString() output by default: "[object Object]"
      expect(megalomaniac[{}]).toBe(FILL_ME_IN);
=======
      expect(megalomaniac['2']).toBe('two');
      expect(megalomaniac['true']).toBe('five');
      // all objects have the same toString() output by default: "[object Object]"
      expect(megalomaniac[{}]).toBe('bad idea');
>>>>>>> main
    });

  });

  it("should know properties that are functions act like methods", function () {
    var megalomaniac = {
      mastermind: "Brain",
      henchman: "Pinky",
      battleCry: function (noOfBrains) {
        return "They are " + this.henchman + " and the" +
          Array(noOfBrains + 1).join(" " + this.mastermind);
      }
    };

    var battleCry = megalomaniac.battleCry(4);
<<<<<<< HEAD
    expect(FILL_ME_IN).toMatch(battleCry);
=======
    expect("They are Pinky and the Brain Brain Brain Brain").toMatch(battleCry);
>>>>>>> main
  });

  it("should confirm that when a function is attached to an object, 'this' refers to the object", function () {
    var currentDate = new Date();
    var currentYear = (currentDate.getFullYear());
    var megalomaniac = {
      mastermind: "James Wood",
      henchman: "Adam West",
      birthYear: 1970,
      calculateAge: function () {
        return currentYear - this.birthYear;
      }
    };

<<<<<<< HEAD
    expect(currentYear).toBe(FILL_ME_IN);
    expect(megalomaniac.calculateAge()).toBe(FILL_ME_IN);
=======
    expect(currentYear).toBe(2025);
    expect(megalomaniac.calculateAge()).toBe(55);
>>>>>>> main
  });

  describe("'in' keyword", function () {
    var megalomaniac;
    beforeEach(function () {
      megalomaniac = {
        mastermind: "The Monarch",
        henchwoman: "Dr Girlfriend",
        theBomb: "yes"
      };
    });

    it("should have the bomb", function () {

<<<<<<< HEAD
      var hasBomb = "theBomb" in megalomaniac;

      expect(hasBomb).toBe(FILL_ME_IN);
=======
      var hasBomb = "theBomb" in megalomaniac; // just asking is theBomb in megalomaniac

      expect(hasBomb).toBe(true);
>>>>>>> main
    });

    it("should not have the detonator however", function () {

      var hasDetonator = "theDetonator" in megalomaniac;

<<<<<<< HEAD
      expect(hasDetonator).toBe(FILL_ME_IN);
=======
      expect(hasDetonator).toBe(false);
>>>>>>> main
    });
  });

  it("should know that properties can be added and deleted", function () {
    var megalomaniac = { mastermind : "Agent Smith", henchman: "Agent Smith" };

<<<<<<< HEAD
    expect("secretary" in megalomaniac).toBe(FILL_ME_IN);

    megalomaniac.secretary = "Agent Smith";
    expect("secretary" in megalomaniac).toBe(FILL_ME_IN);

    delete megalomaniac.henchman;
    expect("henchman" in megalomaniac).toBe(FILL_ME_IN);
=======
    expect("secretary" in megalomaniac).toBe(false);

    megalomaniac.secretary = "Agent Smith";
    expect("secretary" in megalomaniac).toBe(true);

    delete megalomaniac.henchman;
    expect("henchman" in megalomaniac).toBe(false);
>>>>>>> main
  });
  
});
