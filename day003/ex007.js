// mongodb- express

const mongodbClient = require('mongodb').MongoClient

mongodbClient.connect('mongodb://localhost', function(err, client){
    if(err) throw err
    var db = client.db('test')
    var car = db.collection('car')
    car.findOne({}, function(err, result){
        if(err) throw err
        
        //console.dir(result)
        console.log(result.name)
        console.log(result.price)
        console.log(result.comp)
        console.log(result.year)
        client.close()
    })
})

