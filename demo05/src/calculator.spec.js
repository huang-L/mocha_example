var add_operator = require('./operator/add_operator')
var multiply_operator = require('./operator/multiply_operator')
var calculator = require('./calculator');
var expect = require('chai').expect;
var sinon = require('sinon')

describe(__filename, function () {
  describe('+ operator', function () {

    it('the method decrease_power is invoked once', function () {

      let spy = sinon.spy(calculator,"decrease_power")

      let ret = calculator.calc("+", 1, 2)

      expect(ret).to.equals(3)
      expect(spy.calledOnce).to.true
      

    });
  })

  describe('x operator', function () {

  })

});