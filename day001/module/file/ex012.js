var fs = require('fs')

//read a file
var data = fs.readFileSync('C:/Users/kosmo_21/Documents/GitHub/nodejs/day001/module/package.json', 'utf8')

//show data
console.log(data)