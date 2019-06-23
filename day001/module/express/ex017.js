// expess

// express is come with http
// express 와 http 모듈을 함께 사용하는 것을 권장

//const, let
// npm install nodemon -g --> don't restart server when changing code

const http = require('http')
const express = require('express')
const app = express();
let port = 3000

//RESTful
app.get('/', function(req, res){
    res.end('hhh, server', req)
})
app.post('/test', function(){
    res.end('this is post request')
})
app.get('/test', function(req, res){
    res.end('hi, sungil', req)
})

//http server with express module
const server = http.createServer(app)
server.listen(port, (req, res)=>{
    console.log('server is running on ', port)
})