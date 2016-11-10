var person = {
    fristname: '',
    lastname: '',
    greet: function(){
        return this.fristname + ' ' + this.lastname;
    }
}

var zaki = Object.create(person);
zaki.fristname = 'Mohamed';
zaki.lastname = 'Zaki';

var toty = Object.create(person);
toty.fristname = "Fatma";
toty.lastname = "NourElDin";

console.log(toty.greet())
console.log(zaki.greet())