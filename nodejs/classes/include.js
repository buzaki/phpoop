'use strict';
var eventEmitter = require('events');

module.exports = class Greeter extends eventEmitter {
    constructor(){
        super();
        this.greeting = "Hello World";
    }

    greet(data) {
        console.log(`kosomk ${this.greeting}`);
        this.emit('greet', data);
    }
}