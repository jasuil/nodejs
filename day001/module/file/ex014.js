//write data on file

var fs = require('fs')

var msg = 'hi, jasuil 성일짱'

fs.writeFile('./output.txt', msg, function (err) {
    if(err) throw err
    console.log('output.txt is made')
})
