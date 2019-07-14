//login using mongoose

const http = require('http')
const express = require('express')
const mongoose = require('mongoose')

const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const expressSession = require('express-session')
      
const app = express()
const path = require('path')
const static = require('serve-static')
const router = express.Router()

app.set('port', process.env.PORT || 3000)
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.use('/public', static(path.join(__dirname, 'public')))

app.use(cookieParser())
app.use(expressSession({
    secret: 'my Key',
    resave: true,
    saveUninitialized: true
}))

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

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

const authUser = (database, id, password, callback)=>{
    console.log(`call authUser id->${id} pwd->${password}`)
    
    userModel.find({id:id, password: password}, function(err, results){
        
        if(err) {
            callback(err, null)
            return;
        }
 
        if(results.length > 0){           
            callback(null, results)
        }else{
            console.log('no exists documents')
            callback(null, null)
        }
    })
}
    
//login routing function
router.route('/process/login').post((req, res) => {
    console.log('/process/login')
    
    var paramId = req.body.id
    var paramPwd = req.body.password;
    
    console.log(`id: ${paramId} , password: ${paramPwd}`)
    
    if(database){
        authUser(database, paramId, paramPwd, (err, docs)=>{
            if(err) throw err
            
            if(docs){
               console.log('login ok')
                req.session.user={
                    id:docs[0].id,
                    name:docs[0].name
                }
                
                res.app.render('login_result',{"user": req.session.user}, (err, html)=>{
                    if(err) throw err
                    res.end(html)
                })
               }else{
                   console.log('login error')
                   res.writeHead({'Content-type':'text/json;charset=utf8'})
                   res.write('login error')
                   res.end()
               }
            res.end(docs)
        })
    }else{
            console.log('mongodb connetion error')
            res.end('mongodb connetion error')
        }
    //res.end(`id: ${paramId} , password: ${paramPwd}`)
})

//add user
router.route('/process/addUser').post((req, res)=>{
    console.log('/process/addUser 요청 됨...');
    
    var paramId = req.body.id;
    var paramName = req.body.name;
    var paramPwd = req.body.password;
    
    var userData = {
        id: paramId,
        name: paramName,
        password: paramPwd
    }
    
    console.log(`${paramId}, ${paramName}, ${paramPwd}`)
    
    if(database){
        res.writeHead(200, {'Content-Type':'text/html;charset=utf8'});
        res.write(JSON.stringify(userData))
        res.end()
    }else{
        res.writeHead(200, {'Content-Type':'text/html;charset=utf8'});
        res.write("<h1>connection error</h1>")
        res.end()
    }
})

// router 설정
app.use('/', router);

const server = http.createServer(app);
server.listen(app.get('port'), ()=>{
    console.log(`http://localhost:${app.get('port')}`);
    connectDB();
});