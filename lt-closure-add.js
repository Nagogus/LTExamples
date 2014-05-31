console.clear();

function add(a) {
    return function(b) {
        a += b;
        return a;
    }
}


console.log(add(5)(2));