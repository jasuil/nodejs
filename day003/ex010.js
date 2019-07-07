//mongodb- ejs

const http = require('http')
const express = require('express')
const mongodbClient = require('mongodb').MongoClient
const ejs = require('ejs')
const path = require('path')
const ObjectId = require('mongodb').ObjectId; 
const bodyParser = require('body-parser')

const app = express()
let db
var router = express.Router()

app.set('port', 3000)
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

//app.use(bodyParser())
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

router.route('/car/list').get(function(req, res){
    
    console.log('/car/list')
    
    if(db){
        //collect document list
        var car = db.collection('car')
        car.find({}).toArray(function(err, docs){
            if(err) throw err
                    
            //rendering by ejs template
             req.app.render('car_list', {carlist: docs}, function(err, html){
                if(err) throw err
                res.end(html)
            })
            
        })
       }
})


router.route('/car/:_id/detail/').get(function(req, res){
    
    console.log('/car/:_id/detail')
    
    var id = req.params._id
    var o_id = new ObjectId(id);
    
    console.log('find car id is', id, typeof(o_id))
    
    if(db){
        //collect document list
        var car = db.collection('car')
        
        car.findOne({_id: o_id}, function(err, docs){
            if(err) throw err
                    
            //rendering by ejs template
             req.app.render('car_detail', {cardetail: docs}, function(rendErr, html){
                if(rendErr) throw err
                console.log('car ', docs)
                res.end(html)
            })
            
        })
    }
})

router.route('/car/:_id/update/price').get(function(req, res){
    
    console.log('/car/:_id/detail')
    
    var id = req.params._id
    var price = req.query.price
    var o_id = new ObjectId(id);
    
    console.log('find car id is', id, typeof(o_id))
    
    if(db){
        //collect document list
        var car = db.collection('car')
        
        car.update({_id: o_id}, {$set:{price: price}},  function(err, docs){
            if(err) throw err
                    
            //rendering by ejs template
             res.redirect('/car/' + id + '/detail/')
        })
    }
})

router.route('/car/:_id/update').get(function(req, res){
      console.log('/car/:_id/update get')
    
    var id = req.params._id
    var name = req.query.name
    var price = req.query.price
    var comp = req.query.comp
    var year = req.query.year
    var o_id = new ObjectId(id);
    
    console.log('find car id is', id, typeof(o_id))
    
    if(db){
        //collect document list
        var car = db.collection('car')
        
        car.findOne({_id: o_id}, function(err, docs){
            if(err) throw err
                    
                     
            //rendering by ejs template
             req.app.render('car_update', {cardetail: docs}, function(rendErr, html){
                if(rendErr) throw err
                console.log('car ', docs)
                res.end(html)
            })
        })
    }
})
router.route('/car/:_id/update').post(function(req, res){
    console.log('/car/:_id/update post')
    
    var _id = req.body._id
    var name = req.body.name
    var price = req.body.price
    var comp = req.body.comp
    var year = req.body.year
    var o_id = new ObjectId(_id);
    
    var cardetail = {
        'name': name,
        'price': price,
        'comp': comp,
        'year': year
    }
    
    console.log('find car id is', _id, typeof(o_id))
    
    if(db){
        //collect document list
        var car = db.collection('car')
        
        car.updateOne({_id: o_id}, {$set: cardetail}, function(err, docs){
            if(err) throw err
                    
            //rendering by ejs template
             res.redirect('/car/' + _id + '/detail/')
        })
    }else{
        console.log('db connection error')
        res.end('db connection error')
    }
})

//mongo db module version is difference between 2 and 3
function connectDb(){
    
    //var dbUrl = 'http://localhost/test' version 2
    var dbUrl = 'mongodb://localhost'
    var dbName = 'test'
    
    mongodbClient.connect(dbUrl, function(err, conn){
        if(err){ 
            console.log('connection error')
            throw err
        }
         db = conn.db(dbName)
        console.log('connection success')
    })
}

app.use('/', router)

var server = http.createServer(app)

server.listen(app.get('port'), function(){
    console.log('server is running')
    connectDb()
})
