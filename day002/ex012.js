// login get

var http = require('http')
var express = require('express')
var static = require('serve-static')
var path = require('path')
var app = express()

app.set('port', process.env.PORT || 3000)

app.use('/public', static(path.join(__dirname, 'public')))

app.get('/process/login', function(req, res){
  
    var id = req.query.id
    var pw = req.query.pw
    var userAgent = req.header('User-Agent')
    
    console.log('/process/login')
    
    res.writeHead(200, {"Content-type": "text/html;charset=utf8"})
    
    res.write(`id: ${id}`);
    res.write(`<br/>pw: ${pw}`);
    res.write(`<br/>User-Agent: ${userAgent}`)
    
    res.end('<br/>end')
})


var server = http.createServer(app)
server.listen(app.get('port'), function(){
    console.log('server is running on', app.get('port'))
})