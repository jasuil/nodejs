//mongodb- express

const http = require('http')
const express = require('express')
const mongodbClient = require('mongodb').MongoClient


const app = express()

app.set('port', 3000)

//mongo db module version difference between 2 and 3
function connectDb(){
    
    //var dbUrl = 'http://localhost/test' version 2
    var dbUrl = 'mongodb://localhost'
    var dbName = 'test'
    
    mongodbClient.connect(dbUrl, function(err, conn){
        if(err){ 
            console.log('connection error')
            throw err
        }
        var db = conn.db(dbName)
        console.log('connection success')
    })
}
var server = http.createServer(app)

server.listen(app.get('port'), function(){
    console.log('server is running')
    connectDb()
})
