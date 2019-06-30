// response param

var http = require('http')
var express = require('express')
var app = express()

app.set('port', process.env.PORT || 3000)

app.get('/param', function(req, res){
  
    var name = req.query.name
    var age = req.query.age
    
    console.log('/param')
    
    res.writeHead(200, {"Content-type": "text/html;charset=utf8"})
    
    res.write("name: " + name);
    res.write("\nage: " + age);
    
    res.end('<br/>end')
})

var server = http.createServer(app)
server.listen(app.get('port'), function(){
    console.log('server is running on', app.get('port'))
})