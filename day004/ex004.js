//visitor counter server
const http = require('http')
const express = require('express')
const cors = require('cors')
const app = express()
const router = express.Router()
const path = require('path')
const static = require('serve-static')
app.use(cors())

app.use('/public', static(path.join(__dirname, 'public')))

var cnt = 0

router.route('/count/:size').get((req, res) => {
    
    var cnt = req.params.size
    
    console.log('/count, ', cnt)

    /*
    if(cnt < size){
    
       res.end("" + size)
    }else{
           console.log('changed ', cnt)
            
           res.end("" + cnt)
    }
    */
    res.end("" + cnt)
    
})

router.route('/init').get((req, res) => {

    console.log('/init , ', cnt)
    cnt++

    res.end("" + cnt)
    
})

app.use('/', router)

const server = http.createServer(app)
server.listen(3000, () => {
    console.log('server is running')
})