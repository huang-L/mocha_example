var add = require('./add.js');
var expect = require('chai').expect;

describe(__filename, function() {
  it('#async method, add', function(done) {
    add(1, 1).then(function(ret){
      expect(ret).to.be.equal(2);
      done()
    })

  });
});
