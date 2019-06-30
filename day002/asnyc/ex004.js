// async

var async = require('async')
async.waterfall([
    function task1(callback){
        callback(null, 'value1 ')
    },
    function task2(arg, callback){
        console.log(arg)
        callback(null, arg, 'value2 ')
    },
    function task3(arg1, arg2, callback){
        console.log(arg1, arg2)
        callback(null, arg1 + arg2 + 'result')
    },
], function(err, result){
    console.log('results ==>', result)   
})