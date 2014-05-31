console.clear();

//First case
console.log('First case this is: ' + this);


//Second case
(function() {
    console.log('Second case this is: ' + this);
})();


//Third case
function MySuperObject() {
    console.log('Third case this is: ' + this);
}

MySuperObject();
new MySuperObject();


//Fourth case
var obj = {
    callMe: function() {
        console.log('Fourth case this is: ' + this);
    }
};
obj.callMe();
