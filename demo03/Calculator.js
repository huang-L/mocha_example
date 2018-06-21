class Calculator {
  add(x, y) {
    if (x < 0 || y < 0) {
      throw new error("invalid param")
    }
    return x + y;
  }

  multiply(x, y) {
    if (x < 0 || y < 0) {
      throw new error("invalid param")
    }
    return x * y;
  }
}

module.exports = Calculator;