// the revealing module pattern

var data_input = "Hello with no access";

echo = function(){
    console.log(data_input);
}

module.exports = {
    printo: echo
}