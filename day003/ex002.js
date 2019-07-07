//session login

const express = require('express')
const http = require('http')
const path = require('path')

const bodyParser = require('body-parser')
const static = require('serve-static')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const expressSession = require('express-session')
const ejs = require('ejs')

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
    secret: 'my Key',
    resave: true,
    saveUninitialized: true
}))

//product spec page
router.route('/process/product').get(function(req, res){
    console.log('process/product')
    
    //login need
    if(req.session.user === undefined){
        console.log('login need')
        res.redirect('/public/login.html')
    }else{
        req.app.render('product', {}, function(err, html){
            if(err) throw err;
            res.end(html)
        })
    }
})

router.route('/process/login').post(function(req, res){
    console.log('/process/login')
    var paramId = req.body.id;
    var paramPwd = req.body.pwd;
    
    console.log(paramId + ';' + paramPwd)
    
    //session register
    if(req.session.user){
        console.log('you have logged in already')
        res.writeHead(200, {'Content-type': 'text/html;charset=utf8'})
        req.write('<a href="/process/logout">logout</a><br/>')
        req.end('<a href="/process/product">produet specific page</a>')
    }else{
        req.session.user = {
            id: paramId
            , authorize: true
        }
    }
    
    console.log('session info saved')
    res.writeHead(200, {'Content-type': 'text/html;charset=utf8'})
    res.end('<a href="/process/product">produet specific page</a>')
    
});


router.route('/process/logout').get(function(req, res){
    console.log('/process/logout')
    if(req.session.user != undefined){
        console.log('session delete')
        req.session.destroy(function(err){
            if(err) throw err;
            console.log('you\'ve logged out')
         //   res.writeHead(200, {'Content-type': 'text/html;charset=utf8'})
            res.redirect('/public/login.html')
        })
    }else{
        console.log('not logged in')
        res.redirect('/public/login.html')
    }
   // res.end()
})

app.use('/', router)

server.listen(app.get('port'), () => {
    console.log('server is running ')
})
