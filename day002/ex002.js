// callback function 2
//
//(function (){
//    console.log('first thing')
//    
//    console.log('second thing')
//    
//    console.log('when second thing end')
//    
//    console.log('third thing')
//})();
//

function f02(callback){
    console.log('second thing')
    
    if(callback) callback()
}
function f01(){
    console.log('first thing')
    
    setTimeout(function(){ //asynchrous call
        f02(function(){
            console.log('i\'m callback function')
        })
    }, 1000)
    
    console.log('when second thing end')
    
    console.log('third thing')
}

f01()
