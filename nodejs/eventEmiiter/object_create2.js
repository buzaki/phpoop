var obj = {
    name: 'Mohamed Zaki',
    hi: function(){
        console.log(`Hello ${this.name}`);
    }
}

obj.hi();
obj.hi.call({name: 'Koky iten'})

obj.hi.apply({name: 'Koky fatma'})
