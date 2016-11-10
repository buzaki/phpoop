'use strict';
var Greeter = require('./include')

/*
class Greeter extends eventEmitter {
    constructor(){
        super();
        this.greeting = "Hello World";
    }

    greet(data) {
        console.log(`kosomk ${this.greeting}`);
        this.emit('greet', data);
    }
}
*/

var greeter1 = new Greeter();
greeter1.on('greet', function(data){
    console.log('some one Greet!: ' + data)
})

greeter1.greet('zaki')