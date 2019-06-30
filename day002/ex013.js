// login post

var http = require('http')
var express = require('express')
var static = require('serve-static')
var path = require('path')
var bodyParser = require('body-parser')
var app = express()
var router = express.Router()

app.set('port', process.env.PORT || 3000)

//static middleware
app.use('/public', static(path.join(__dirname, 'public')))
//body parser middleware
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

//app.post('/process/login', function(req, res){
router.route('/process/login').post(function(req, res){
  
    var id = req.query.id || req.body.id
    var pw = req.body.pw
    var userAgent = req.header('User-Agent')
    
    console.log('/process/login')
    
    res.writeHead(200, {"Content-type": "text/html;charset=utf8"})
    
    res.write(`id: ${id}`);
    res.write(`<br/>pw: ${pw}`);
    res.write(`<br/>User-Agent: ${userAgent}`)
    
    res.end('<br/>end')
})

app.use('/', router)

var server = http.createServer(app)
server.listen(app.get('port'), function(){
    console.log('server is running on', app.get('port'))
})