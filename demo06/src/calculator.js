var add_operator = require('./operator/add_operator')
var multiply_operator = require('./operator/multiply_operator')
var power_util=require("./lib/power_util")
module.exports = {
    power:100,
    decrease_power:function(){
        this.power = power_util.decrease(this.power)
    },
    calc: function (op, a, b) {
        let ret;
        switch (op) {
            case "+":
                ret = add_operator.add(a, b)
                break;
            case "x":
                ret = multiply_operator.multiply(a, b)
                break;
            default:
                ret = null

        }

        if(ret < 0){
            throw new Error("result less than 0")
           
        }

        if(ret > 100){
            throw new Error("result less than 100")
        }


        return ret
    }
};