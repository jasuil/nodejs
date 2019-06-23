// create html document

const http = require('http')
const express = require('express')
const app = express()
//static middleware
//npm i serve-static --save
const static = require('serve-static')

//static folder define
app.use('/static', static(__dirname + '/static'))

app.get('/', function(req, res){
    console.log('you\'re seeing path /')
    
    res.writeHead(200, {'Content-type':'text/html;charset=utf8'})
    
    res.write('<h1>hi</h1>')
    res.write('<h3>성일짱</h3>')
    res.write('<img src=\'/static/img/car.jpg\'/>')
    res.end() //plz, end loop
    
})
const server = http.createServer(app)
server.listen(3000, function(){
    console.log('server is running')
})