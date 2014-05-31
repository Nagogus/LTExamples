console.clear();

function Cat(name) {
    this.name = name;       
    this.type = 'Cat';
    this.hello = 'Myau';
}

var animalTransformer = {
    changeName: function(newName) {
        this.name = newName;
    },
    
    changeType: function(newType) {
        this.type = newType;
    }
};


var murzik = new Cat('murzik');
animalTransformer.changeName.call(murzik, 'sharik');
console.log(murzik.name);

