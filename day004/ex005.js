//chat server
const http = require('http')
const express = require('express')
const cors = require('cors')
const app = express()
const router = express.Router()

app.use(cors())

var messages = []

router.route('/receive').get((req, res) => {
    
    if(req.query.size >= messages.length){
        res.end()
    }else{
        console.log(req.query.size)
        var result = {
            total: messages.length,
            message: messages.slice(req.query.size)
        }
        res.end(JSON.stringify(result))
    }  
})

router.route('/send').get((req, res) => {

    console.log(req.query.sender + ';' + req.query.message)
    
    messages.push({
        sender: req.query.sender,
        message: req.query.message
    })
    res.end()
})

app.use('/', router)

const server = http.createServer(app)
server.listen(3000, () => {
    console.log('server is running')
})