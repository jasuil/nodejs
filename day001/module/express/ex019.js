// router

const http = require('http')
const express = require('express')
const app = express()
const static = require('serve-static')
const router = express.Router()

app.set('port', 3000)

//router path register
//elegance url
router.route('/plus/:x/:y').get(function(req, res){
    let x = Number(req.params.x) //parse number(new)
    let y = parseInt(req.params.y) //parse number(old)
    
   res.writeHead(200, {'Content-type':'text/html;charset=utf8'})
    res.end(x + y + '') //end return value is only string
})

router.route('/minus/:x/:y').get(function(req, res){
      
   res.writeHead(200, {'Content-type':'text/html;charset=utf8'})
    res.end(Number(req.params.x) - Number(req.params.y) + '') //end return value is only string
})

router.route('/multiple/:x/:y').get(function(req, res){
      
   res.writeHead(200, {'Content-type':'text/html;charset=utf8'})
    res.end(Number(req.params.x) * Number(req.params.y) + '') //end return value is only string
})

router.route('/divide/:x/:y').get(function(req, res){
      
   res.writeHead(200, {'Content-type':'text/html;charset=utf8'})
    res.end(Number(req.params.x) / Number(req.params.y) + '') //end return value is only string
})

//add router before express run
app.use('/', router)
const server = http.createServer(app)
server.listen(app.get('port'), ()=>{
    console.log('server is running')
} )