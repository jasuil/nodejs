// invoke module

//module install => npm install or npm i
// global : npm install -g
// local(current project adopt only) : npm install --save
// init : npm init
// package information : package.json

var nconf = require('nconf')

nconf.env();
var os = nconf.get('OS');

console.log(`os variable value is ${os}`)