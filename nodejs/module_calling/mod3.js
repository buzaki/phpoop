function embeded_hello() {
    this.php = 'echo Hello World';
    this.echo = function(){
        console.log(this.php);
    }
}

module.exports = new embeded_hello();