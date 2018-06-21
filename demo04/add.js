function add(x, y) {
  return new Promise(function (solve, reject) {
    setTimeout(function(){
      solve(x + y)
    },3000)
  })
}

module.exports = add;