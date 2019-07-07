//error page


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


app.use('/', router)

//router behind
app.all('*', function(req, res){
    res.status(404).send('<h1>error page, 오류 화면</h1>')
})

server.listen(app.get('port'), () => {
    console.log('server is running ')
})