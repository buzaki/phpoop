// object properties and methods
var obj = {
    greet: 'Hello'
}

console.log(obj.greet);
console.log(obj['greet']);

var external = 'greet';
console.log(obj[external]);

var arr = [];

arr.push(function(){
    console.log("hello World 1")
})

arr.push(function(){
    console.log("hello World 2")
})

arr.push(function(){
    console.log("hello World 3")
})

arr.forEach(function(item){
item();
})