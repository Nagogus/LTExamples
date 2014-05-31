console.clear();

function Animal(name) {
    this.name = name;
    this.type = 'Just an animal';       
}

Animal.prototype.sayHello = function() {
    return 'Hello my name is: ' + this.name;
}        


function Dog(name) {
    this.name = name;
    this.type = 'Dog';        
}

Dog.prototype = Object.create(Animal.prototype);



function Cat(name) {
    this.name = name;       
    this.type = 'Cat';
    this.sayHello = function() {
        return "Myau";
    }
}

Cat.prototype = Object.create(Animal.prototype, {});
Cat.prototype.sayHello = function() {
    return "Mi-mi-mi";
}

/*
function Kitty() {
    
}

Kitty.prototype = Object.create(Cat.prototype);

var kitty = new Kitty();
console.log(kitty.sayHello());
*/

var dog = new Dog('Sharik');
console.log(dog.sayHello());

var cat = new Cat();
console.log(cat.sayHello());


