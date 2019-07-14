//mongoose

const http = require('http')
const express = require('express')
const mongoose = require('mongoose')

const app = express()
const path = require('path')
const static = require('serve-static')
const router = express.Router()

app.set('port', process.env.PORT || 3000)
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.use('/public', static(path.join(__dirname, 'public')))

//schema model save
//attention global variable => hoisting
//this.
//async setInterval, setTimeOut, ajax, promise...
var database;
var userSchema;
var userModel;

const connectDB = ()=>{
    var dbUrl = 'mongodb://localhost:27017/local'
    
    console.log('trying db connecting')
}
    
//use router
app.use('/', router)

const server = http.createServer(app)
server.listen(app.get('port'), ()=>{
    console.log('server is running')
})