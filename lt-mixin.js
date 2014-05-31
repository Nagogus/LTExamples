console.clear();

var latestId = 0;

function Tangue() {
    this.say = function(message) {
        console.log(message);
    };
}

function Legs() {
    this.walk = function() {
        console.log(this.name + ' is walking')
    }
}

function Tracked() {
    this.id = latestId++;
}

function Cat(name) {
    Tangue.call(this);
    Legs.call(this);
    Tracked.call(this);
    
    this.name = name;    
}

var murzik = new Cat('murzik');
murzik.say('hello');
murzik.walk();
console.log(murzik.id);

var matroskin = new Cat('matroskin');
console.log(matroskin.id);
