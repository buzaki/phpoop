var catt = require('./catter.js')
var toty = new catt();

toty.on('hello', function(){
    console.log("moew MOW Mweo")
})

toty.mow('hello');