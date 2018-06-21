var add_operator = require('./operator/add_operator')
var multiply_operator = require('./operator/multiply_operator')
var calculator = require('./calculator');
var expect = require('chai').expect;
var sinon = require('sinon')

describe(__filename, function () {
  describe('+ operator', function () {

    let add_stub

    before(function(){
      add_stub = sinon.stub(add_operator, "add")
    })

    beforeEach(function () {
      
    })

    afterEach(function () {
       add_stub.restore();
    })

    it('throw error when result more than 100', function () {
      let ret

      add_stub.returns(101)

      try {
        ret = calculator.calc("+")
      } catch (error) {
        console.log(error.message)
        expect(error.message).to.eqls("result less than 100")

      }

      expect(ret).to.be.undefined

    });

    it('throw error when result less than 0', function () {
      let ret

      add_stub.returns(-1)

      try {
        ret = calculator.calc("+")
      } catch (error) {
        expect(error.message).to.eqls("result less than 0")

      }


      expect(ret).to.be.undefined

    });
  })

  // describe('x operator', function () {

  // })

});