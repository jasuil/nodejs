// response send, end

var http = require('http')
var express = require('express')
var app = express()

app.set('port', process.env.PORT || 3000)
app.get('/home', function(req, res){
    console.log('/home')
    res.send({jasuil:1212, name:'성일짱'})
})

var server = http.createServer(app)
server.listen(app.get('port'), function(){
    console.log('server is running on', app.get('port'))
})