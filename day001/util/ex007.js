// inherit
function Parent(){
    this.name = 'parent'
}


Parent.prototype.sayHi = function(){
    console.log("hi, parent class", this.name)
}


function Child(){
    this.name = 'child'
}

//old style inherit

//var p = new Parent()
//p.sayHi()

//Child.prototype = new Parent();
//Child.prototype.constructor = Child

//var c = new Child()
//c.sayHi()

//new style with util module

var util = require('util')
util.inherits(Child, Parent);

var c = new Child()
c.sayHi()