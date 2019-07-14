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

const connectDB = () => {
    var dbUrl = 'mongodb://localhost:27017/local'
    
    console.log('trying db connecting')
    
    mongoose.Promise = global.Promise //nodejs global
    mongoose.connect(dbUrl)
    
    database = mongoose.connection
    
    database.on('error', 
               console.error.bind(console,  'mongoose connecting error')
               )
    
    database.on('open', () => {
        console.log(`database is connecting now on ${dbUrl}`)
        userSchema = mongoose.Schema({
            id: String,
            name: String,
            password: String
        })
        console.log('users schema', userSchema)
        
        userModel = mongoose.model("users", userSchema)
        console.log('users schema is created')
    })
    
    database.on('disconnected', () => {
        console.log('retrying connection in 5 seconds')
        setTimeout(connectDB, 5000)
    })
}
    
//use router
app.use('/', router)

const server = http.createServer(app)
server.listen(app.get('port'), ()=>{
    console.log('server is running')
    connectDB()
})