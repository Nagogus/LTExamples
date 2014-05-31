console.clear();

function counter() {
    var i = 0;
    return function() {
        return i++;
    }
}

var cnt = counter();

console.log(cnt());
console.log(cnt());
console.log(cnt());