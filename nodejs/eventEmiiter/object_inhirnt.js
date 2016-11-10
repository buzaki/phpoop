var util = require('util');

function Person() {
    this.name = 'Zaki';
    this.job = 'system admin';
}

Person.prototype.fund = function() {
    console.log(`we can have 1k$ for ${this.name} and less for ${this.job}`);
}

function Policman() {
    Person.call(this);
    this.badgenumber = '1234';
}

util.inherits(Policman, Person);

var officer = new Policman();  
officer.fund();

// prototype is auto inherits 
// and propy and methed none prototype do call on them
// the parnt object name : parent
// chind one is child
// to include everything if you creating new child
// do parent.call(this) on child functions
