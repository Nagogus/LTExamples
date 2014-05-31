console.clear();

function SomeObject() {
    this.name = 'Barcamp!';
    
    this.showMeYourName = function() {
        console.log(this.name);
    }
    
    this.doAwesomeThing = function() {
        setTimeout(function() {            
            this.showMeYourName();
        }, 2000);
    }
}

var obj = new SomeObject();

obj.doAwesomeThing();