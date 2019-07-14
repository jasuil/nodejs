//socket io server broadcast
const http = require('http')
const express = require('express')
const cors = require('cors')
const app = express()
const router = express.Router()
const socketIo = require('socket.io')

app.use(cors())


app.use('/', router)

const server = http.createServer(app)
server.listen(3000, () => {
    console.log('server is running')
})

//share port
const io = socketIo.listen(server)

io.sockets.on('connection', function(socket){
    console.log('socket server has conneted')
})