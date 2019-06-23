// event

process.on('exit', function(){
    console.log('exit !!!')
})

process.on('tick', function(){
    console.log('tick !!!')
})

setTimeout(function(){
    console.log('exit in 2 seconds')
    process.emit('tick') //user event occur
    process.exit()
}, 2000)