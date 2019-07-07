//multer

const express = require('express')
const http = require('http')
const path = require('path')

const bodyParser = require('body-parser')
const static = require('serve-static')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const expressSession = require('express-session')
const ejs = require('ejs')
const multer = require('multer')

const app = express()
const router = express.Router()
const server = http.createServer(app)

app.set('port', process.env.PORT || 3000)
//use ejs template
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.use('/public', static(path.join(__dirname, 'public')))

app.use(cors())
app.use(bodyParser())
app.use(cookieParser())
app.use(expressSession({
    secret: 'myKey',
    resave: true,
    saveUninitialized: true
}))

//file upload 
//storage and upload object create
var storage = multer.diskStorage({
    destination: function(req, file, callback){
        callback(null, 'uploads') //upload folder
    }
        ,
    filename: function(req, file, callback){
        callback(null, file.originalname + Date.now()) //filename make
    }
})

var upload = multer({
    storage: storage,
    limits: {
        files: 10,
        filneSize: 1024*1024*1024
    }
})


router.route('/process/photo').post(upload.array('photo', 1), function(req, res){
    console.log('/process/photo')
    
    //read the updloaded file
    try{
        console.log('upload success')
        var files = req.files;
        console.log('is file array? ' , Array.isArray(files))
        console.dir(files)
        res.end('upload success')
    }catch(err){
        console.log(err.stack)
        res.end('upload failed')
    }
})

app.use('/', router)

server.listen(app.get('port'), () => {
    console.log('server is running ')
})
