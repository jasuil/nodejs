// use public folder for allow request

var http = require('http')
var express = require('express')
var static = require('serve-static')
var path = require('path')
var app = express()

app.set('port', process.env.PORT || 3000)

app.use('/public', static(path.join(__dirname, 'public')))


var server = http.createServer(app)
server.listen(app.get('port'), function(){
    console.log('server is running on', app.get('port'))
})