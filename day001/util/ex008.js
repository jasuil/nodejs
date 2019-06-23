// es7 inherit

class Parent{
    constructor(){
        this.name = 'parent'    
    }
    
    sayHi(){
        console.log(`hi, ${this.name}`)
    }
}

class Child extends Parent{
    constructor(){
        super();//assign parent constructor call
        this.name = 'child'
    }
    
}

var p = new Child()
p.sayHi()