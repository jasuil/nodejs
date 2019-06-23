var fs = require('fs')
var http = require('http')

var server = http.createServer(function(req, res){
    var inStream = fs.createReadStream('C:/Users/kosmo_21/Documents/GitHub/nodejs/day001/module/file/output.txt')
    res.writeHead(200, {'Content-type' :'text/html;charset=utf8'})
    inStream.pipe(res)
    
});

//server.on('request', function(req, res){
//    //server log
//    console.log('request ok')
//    //browser send
//    res.end('request is sent')
//    
//})

server.listen(8080, function(){
    console.log('server start')
})
