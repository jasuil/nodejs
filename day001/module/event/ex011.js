//use ex010.js
var Calc = require('./ex010') //class get

var calc = new Calc()

calc.emit('stop')

console.log(`Calc title is ${Calc.title}`)
