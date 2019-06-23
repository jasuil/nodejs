//process property
console.log(process.argv.length)
console.log(process.argv) //nodejs path, file path(__filename)


//check out parameter when nodejs run
console.log(process.argv[2])
console.log(process.argv[3])
console.log(process.argv[4])


if(process.argv.length >= 2){
    for(var i=2; i < process.argv.length; i++){
        console.log(process.argv[i])
    }
}

console.log('forEach')
process.argv.forEach(function(item, index){
                     console.log(index >= 2? item : ' ')

                     })

// process.env
console.log('env', process.env);
console.log('os', process.env['os']);
console.log('path', process.env['path']);