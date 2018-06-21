var Calculator = require('./Calculator.js');
var expect = require('chai').expect;

describe(__filename, function () {

  let cal;
  
  before(function () {
    // runs before all tests in this block
  });

  after(function () {
    // runs after all tests in this block
  });

  beforeEach(function () {
    // runs before each test in this block
    cal = new Calculator();
  });

  afterEach(function () {
    // runs after each test in this block
    cal = null;

  });

  describe("#add", function () {
    it('1 + 1 = 2', function () {
      expect(cal.add(1, 1)).to.be.equal(2);
    });
    it('invalid param', function () {
      let ret
      try {
        ret = cal.add(-1, 1)
      } catch (error) {}
      expect(ret).to.be.undefined
    });
  })

  describe("#multiply", function() {
    it('1 x 1 = 2', function() {
      expect(cal.multiply(1, 1)).to.be.equal(1);
    });
    it('invalid param', function () {
      let ret
      try {
        ret = cal.multiply(-1, 1)
      } catch (error) {}
      expect(ret).to.be.undefined
    });
  })


});