//cookie parser

const express = require('express')
const http = require('http')
const path = require('path')

const bodyParser = require('body-parser')
const static = require('serve-static')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const expressSession = require('express-session')

const app = express()
const router = express.Router()
const server = http.createServer(app)

app.set('port', process.env.PORT || 3000)

app.use('/public', static(path.join(__dirname, 'public')))

app.use(cors())
app.use(bodyParser())
app.use(cookieParser())

router.route('/process/login').post(function(req, res){
    console.log('/process/login')
    var paramId = req.body.id;
    var paramPwd = req.body.pwd;
    
    console.log(paramId + ';' + paramPwd)
    
    //cookie input
    res.cookie(
        'user', {id:paramId
                 , password:paramPwd
                 , name:'성일짱'    
        })
    
    //cookie see
    res.redirect('/process/useCookie')
    
    res.end()
    
});

router.route('/process/useCookie').get(function(req, res){
    
    console.log('/process/useCookie')
    
    res.send({cookie: req.cookies})
    res.end()
})


app.use('/', router)

server.listen(app.get('port'), () => {
    console.log('server is running ')
})
