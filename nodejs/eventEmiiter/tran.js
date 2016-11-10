var trans = require('./translate')

var google = new trans();

google.on('Hello', function(){
	console.log('try me');
})

google.on("Hello", function(){
	console.log("2nd wcleom")
})
console.log('Hello!');
google.action("Hello");
