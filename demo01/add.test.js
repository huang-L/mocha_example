var add = require('./add.js');
var expect = require('chai').expect;

describe('test suits for add function', function() {
  it('result should be 2, when 1 + 1', function() {
    expect(add(1, 1)).to.be.equal(2);
  });
});
