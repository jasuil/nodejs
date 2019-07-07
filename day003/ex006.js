//mongodb- mongjs
const mongojs = require('mongojs') //local database only

var db = mongojs('test', ['car'])
db.car.find(function(err, data){
    console.log(data)
})

