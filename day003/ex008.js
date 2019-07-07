// mongodb- express

const mongodbClient = require('mongodb').MongoClient

mongodbClient.connect('mongodb://localhost', function(err, client){
    if(err) throw err
    var db = client.db('test')
    var car = db.collection('car')
    
    /*
    car.findOne({}, function(err, result){
        if(err) throw err
        
        //console.dir(result)
        console.log(result.name)
        console.log(result.price)
        console.log(result.comp)
        console.log(result.year)
    })
    */
    
    car.find({}).toArray( function(err, results){
        if(err) throw err
        
        //console.dir(results)
        for(element of results){
            console.log(`${element.name}`)
            console.log(`${element.price}`)
            console.log(`${element.comp}`)
            console.log(`${element.year}`)
        }
        /*
        for(){
            console.log(result.name)
            console.log(result.price)
            console.log(result.comp)
            console.log(result.year)
            }
        */
        client.close()
    })
})

