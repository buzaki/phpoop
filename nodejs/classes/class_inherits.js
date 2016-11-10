'use strict';
class Person {
    constructor(name,job){
        this.name = this.name;
        this.job = this.job;

    }

    fund(){
        console.log(`we can give ${this.name} some fund for his ${this.job}`)
    }
}

class Police extends Person{
    constructor(number){
        super()
        this.number = '1234'
    }
}


var officer = new Police();  
officer.fund();
console.log(officer.number)

// prototype is auto inherits 
// and propy and methed none prototype do call on them
// the parnt object name : parent
// chind one is child
// to include everything if you creating new child
// do parent.call(this) on child functions
