describe("About Objects", function () {

  describe("should know object basics", function() {

    it("should know object and placeholder types", function () {
      expect(typeof {}).toBe(FILL_ME_IN);
      expect(typeof undefined).toBe(FILL_ME_IN);
      expect(typeof null).toBe(FILL_ME_IN);      
    });

    it("should know object truthiness", function () {
      var objects = [undefined, null, {}, {'one': 1}];
      // fill in true or false for each matching object above
      var truthiness = [FILL_ME_IN, FILL_ME_IN, FILL_ME_IN, FILL_ME_IN];
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
      expect(megalomaniac['mastermind']).toBe(FILL_ME_IN);
      expect(megalomaniac.mastermind).toBe(FILL_ME_IN);
      expect(megalomaniac[sidekick]).toBe(FILL_ME_IN);
      // but what do you get when the property doesn't exist?
      expect(megalomaniac.nemesis).toBe(FILL_ME_IN);      
    });

    it("should confirm that properties are case sensitive", function () {
      expect(megalomaniac.henchwoman).toBe(FILL_ME_IN);
      expect(megalomaniac.henchWoman).toBe(FILL_ME_IN);
    });

    it("should confirm that properties always keyed as strings", function () {
      megalomaniac[2] = 'two';
      megalomaniac[3 < 4] = 'five';
      megalomaniac[{object: true}] = 'bad idea';
      expect(megalomaniac['2']).toBe(FILL_ME_IN);
      expect(megalomaniac['true']).toBe(FILL_ME_IN);
      // all objects have the same toString() output by default
      expect(megalomaniac[{}]).toBe(FILL_ME_IN);
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
    expect(FILL_ME_IN).toMatch(battleCry);
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

    expect(currentYear).toBe(FILL_ME_IN);
    expect(megalomaniac.calculateAge()).toBe(FILL_ME_IN);
  });

  describe("'in' keyword", function () {
    var megalomaniac;
    beforeEach(function () {
      megalomaniac = {
        mastermind: "The Monarch",
        henchwoman: "Dr Girlfriend",
        theBomb: true
      };
    });

    it("should have the bomb", function () {

      var hasBomb = "theBomb" in megalomaniac;

      expect(hasBomb).toBe(FILL_ME_IN);
    });

    it("should not have the detonator however", function () {

      var hasDetonator = "theDetonator" in megalomaniac;

      expect(hasDetonator).toBe(FILL_ME_IN);
    });
  });

  it("should know that properties can be added and deleted", function () {
    var megalomaniac = { mastermind : "Agent Smith", henchman: "Agent Smith" };

    expect("secretary" in megalomaniac).toBe(FILL_ME_IN);

    megalomaniac.secretary = "Agent Smith";
    expect("secretary" in megalomaniac).toBe(FILL_ME_IN);

    delete megalomaniac.henchman;
    expect("henchman" in megalomaniac).toBe(FILL_ME_IN);
  });
  
});
