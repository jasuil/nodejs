//mongodb- ejs

const http = require('http')
const express = require('express')
const mongodbClient = require('mongodb').MongoClient
const ejs = require('ejs')
const path = require('path')

const app = express()
var router = express.Router()

app.set('port', 3000)
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

router.route('/car/list').get(function(req, res){
    
    console.log('/car/list')
    
    if(db){
        //collect document list
        
       }
    
    req.app.render('car_list', {}, function(err, html){
        if(err) throw err
        res.end(html)
    })
})

//mongo db module version is difference between 2 and 3
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

app.use('/', router)

var server = http.createServer(app)

server.listen(app.get('port'), function(){
    console.log('server is running')
    connectDb()
})
