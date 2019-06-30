// middleware

var http = require('http')
var express = require('express')
var app = express()

//use middleware
app.use(function(req, res, next){
    console.log('i\'m middleware')
    
    res.writeHead(200, {"Content-type": "text/html;charset=utf8"})
   // res.end("<h1>성일짱의 미들웨어</h1>")
    res.write("<h1>성일짱의 미들웨어</h1>")
    
    next() //next middleware
})

app.use(function(req, res, next){
    console.log('i\'m middleware2')
    
    //res.writeHead(200, {"Content-type": "text/html;charset=utf8"})
   // res.end("<h1>성일짱의 미들웨어</h1>")
    res.write("<h1>성일짱의 미들웨어2</h1>")
    
    next() //next middleware or router when middleware not exists
})

//express request
app.get('/', function(req, res){
    console.log('/ request')
 //   res.writeHead(200, {"Content-type": "text/html;charset=utf8"})
    res.end("<h1>성일짱의 /</h1>")
})

var server = http.createServer(app)
server.listen(3000, function(){
    console.log('server is running')
})
