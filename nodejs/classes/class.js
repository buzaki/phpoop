'use strict';

class Person {

    constructor(name, job){
        this.name = name;
        this.job = job

    }

fund()  {
    console.log(`we can give ${this.name} about 1k$ for his ${this.job}`)
        }
}

var admin = new Person('Zeko', 'linux admin');
var toty = new Person('toty', 'wife');

toty.fund();
admin.fund();
console.log(admin.job)
toty.name;
console.log(admin.__proto__)
console.log(toty.__proto__)
console.log(admin.__proto__ == toty.__proto__);
