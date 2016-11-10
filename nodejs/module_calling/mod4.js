function embeded_hello() {
    this.php = 'echo Hello World in 4';
    this.echo = function(){
        console.log(this.php);
    }
}

module.exports = embeded_hello;