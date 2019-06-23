//console.log("jasuil, hi")
//console.log('jasuil 1212 12')
//
//console.log('jasuil','hi')
//console.log('jasuil' + ' hi')
//
//console.log("age : %d", 11)
//console.log('address : %s', 'bucheon')
//console.log("who : %j", {jasuil: 1212})
//

////format string
var name = 'jasuil'
var address = 'bucheon'

console.log(`name : ${name}, address: ${address}`)


//iterate

var result = 0;

console.time('time check')
for(var i = 1; i <= 10000; i++){
    result += i;
}

console.timeEnd('time check')

console.log('1~10000 sum result is : %d', result)

// __dirname : corrent directory path
// __filename : corrent running file name

console.log('dirname===>', __dirname)
console.log('filename===>', __filename)