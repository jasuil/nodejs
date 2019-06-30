// callback
// run when other call end

//javascript function definition
function F01() {
    console.log('jasuil F01')
}

function F02(name, age){
    console.log('성일장 F02 ' + name + age)
}

//function run when calling it

F01()
F02('짱성일', 1212)

//javascript function definition 2

//allocate a function to a variable
var F03 = function(){ //ananymouns function call
    console.log('F03 call')
}

//array of function
var F04 = [
    function(){return "jasuil1"},
    function(){return "jasuil2"},
    function(){return "jasuil3"}
]

F03()
console.log(F04[1]())

//allocate functions to a parameter
function F05(callback){
    console.log("F05 call")
    if(callback) callback()
}

var callback = function(){
    console.log("i'm call back")
}

F05()
//F05(callback)
F05(function(){ //ananymouns function call
    console.log("i'm call back")
})