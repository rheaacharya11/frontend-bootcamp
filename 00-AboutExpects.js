describe('About Expects', function() {

    // These koans use the Jasmine testing framework.  Like many Javascript
    // testing frameworks (Jasmime, Mocha/Chai, Jest), its assertions are 
    // written in a Behavior-Driven Development (BDD) style.  
    //
    // Each `describe` block creates a test suite, each `it` defines a single spec
    // (or, for us here, a koan), and each `expect` gives a single expectation
    // (or test/assertion).
  
    // We shall contemplate truth by testing reality, via spec expectations.
    it('should expect true', function() {
  
      // Your journey begins here: Replace false with true 
      expect(true).toBeTruthy();
    });
  
    // To understand reality, we must compare our expectations against reality.
    it('should expect equality', function() {
      // We'll usually ask you to replace the FILL_ME_IN value.
      // (Tip: Search for it and use your editor's Find Next to jump to the next one.)
      expect(1 + 1 == 2).toBeTruthy();
    });
  
    // Some ways of asserting equality are better than others.
    it('should assert equality a better way', function() {
      // toEqual() compares using common sense equality.
      expect(1 + 1).toEqual(2);
    });
  
    // Sometimes you need to be precise about what you "type."
    it('should assert equality with ===', function() {
      // toBe() will always use === to compare.
      expect((1 + 1).toString()).toBe("2");
    });

  });
