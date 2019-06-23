//read file async

var fs = require('fs')

var data = fs.readFile('C:\\Users\\kosmo_21\\Documents\\GitHub\\nodejs\\day001\\module\\package.json', 'utf8', function(err, data){
    if(err) throw err;
    console.log(`data is \n ${data}`)
})

console.log('async')
