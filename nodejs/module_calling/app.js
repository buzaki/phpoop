var hihi = require('./wp');

hihi.hiPHP();
hihi.hiRuby();

var json_one = require('./wp/python.json');
console.log(json_one.php);
console.log(json_one.ruby);

// module wirting
// using module.export = function 
var one = require('./mod1')
one();

// using .function 
var two = require('./mod2');
two.hello();
// another way to call
var two2 = require('./mod2').hello

// 3rd way to build module
var three = require('./mod3');
three.echo();

// object in app.js
var hello_4 = require('./mod4');
var grtr = new hello_4();
grtr.echo();

// revealing module
var hello5_app = require('./mod5').printo
hello5_app();

// objects
var obj = {
    greet: 'Hello'
}
console.log(obj.greet);
//or
console.log(obj['greet'])
// or
var prop = 'greet'
console.log(obj[prop])



// array
var arr = [];
arr.push(function(){
    console.log("Hello Array 1");
})

arr.push(function(){
    console.log("Hello Array 2");
})

arr.push(function(){
    console.log("Hello Array 2");
})
// loop throw the Array
arr.forEach(function(item){
item();
})