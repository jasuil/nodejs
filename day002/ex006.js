// ejs template view

var http = require('http')
var express = require('express')
var app = express()
var router = express.Router()

//register ejs
app.set('views', __dirname + '/views')
app.set('view engine', 'ejs')


router.route('/home').get(function(req, res){
    res.writeHead(200, {"Content-type":"text/html;charset=utf8"})
    //res.end('<h2>This is home, 성일짱</h2>')
    res.app.render('home', {"person":{"jasuil":1212, "name":"성일짱"}}, function(err, html){
        if(err) res.end("<h1>ejs rendering missing</h1>")
        res.end(html)
    })
})

router.route('/userList').get(function(req, res){
    
    var userList = [
    {name: "jasuil", job:'mind miner'},
    {name: "jasuil2", job:'mind miner2'},
    {name: "jasuil3", job:'mind miner3'},
    ]
    
    res.writeHead(200, {"Content-type": "text/html;charset=utf8"})
    res.app.render('userList', {"userList": userList}, function(err, html){
        if(err) res.end("<h1>ejs rendering missing</h1>")
        res.end(html)
    })
})

app.use('/', router)

var server = http.createServer(app) // http join express
server.listen(3000, function(){
    console.log('server is started')
})