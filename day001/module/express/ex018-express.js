// create html document

const http = require('http')
const express = require('express')
const app = express()
//static middleware
//npm i serve-static --save
const static = require('serve-static')

//static folder define
var dirname = __dirname //current js folder
app.use('/static2', static('C:/Users/kosmo_21/Documents/GitHub/nodejs/day001/module/static'))

app.get('/', function(req, res){
    console.log('you\'re seeing path /')
    console.log(__dirname)
    res.writeHead(200, {'Content-type':'text/html;charset=utf8'})
    
    res.write('<h1>hi</h1>')
    res.write('<h3>성일짱</h3>')
    res.write('<img src=\'/static2/img/car.jpg\'/>')
    res.end() //plz, end loop
    
})
const server = http.createServer(app)
server.listen(3000, function(){
    console.log('server is running')
})