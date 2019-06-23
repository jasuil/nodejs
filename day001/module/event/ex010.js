//register and use user event

var util = require('util')
var eventEmitter = require('events').EventEmitter

var Calc = function(){
    this.on('stop', function(){
        console.log('Cals stop event')
    })
}

util.inherits(Calc, eventEmitter)

Calc.prototype.add = function(a, b){
    return a + b
}

module.exports = Calc
module.exports.title = 'calculator'