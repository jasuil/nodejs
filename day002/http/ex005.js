// http server

var http = require('http')

var server = http.createServer()

server.listen(3000, function(){
    console.log('server is started')
})

server.on('connection', function(socket){
    var addr = socket.address()
    console.log('client is connecting', addr.address, addr.port)
})

server.on('request', function(req, res){
    console.log('request')
    //console.log(req)
    res.end('request is good')
    server.close() //process kill, taskkill
}) 

server.on('close', function(){
    console.log('server is closed')
})