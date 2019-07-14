//visitor counter server
const http = require('http')
const express = require('express')
const cors = require('cors')
const app = express()
const router = express.Router()

app.use(cors())


var cnt = 1

router.route('/count/:size').get((req, res) => {
    
    var size = req.params.size
    
    console.log('/count, ', size)

    
    if(cnt < size){
    
       res.end("" + size)
    }else{
           console.log('changed ', cnt)
            
           res.end("" + cnt)
    }
    
})

app.use('/', router)

const server = http.createServer(app)
server.listen(3000, () => {
    console.log('server is running')
})