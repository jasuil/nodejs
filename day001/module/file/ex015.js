//
var fs = require('fs')

var inName = 'C:/Users/kosmo_21/Documents/GitHub/nodejs/day001/module/file/output.txt'
var outName = 'C:/Users/kosmo_21/Documents/GitHub/nodejs/day001/module/file/output2.txt'

fs.exists(outName, function (exists) {
    if (exists) {
        fs.unlink(outName, function(err) {
            if (err) throw err;
            console.log('삭제할 파일은', outName)
        });
    }
    
    var inFile = fs.createReadStream(inName, {flags: 'r'})
    var outFile = fs.createWriteStream(outName, {flags: 'w'})
    inFile.pipe(outFile)

    console.log(`${inFile} ====> ${outFile}`)
})
