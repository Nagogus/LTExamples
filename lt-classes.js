console.clear();

function Dog(name) {
    this.name = name;
    
    this.sayHello = function() {        
        return 'Bark!';
    }
}

var sharik = new Dog('sharik');
console.log('Sharik says: ' + sharik.sayHello());

var lord = new Dog('lord');
console.log('Lord says: ' + lord.sayHello());