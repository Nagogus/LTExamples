console.clear();

var test = {0: 'Hello', 1: 'world', 2: 'how', 3: 'are', 4: 'you?'};
console.log('Hey, I am object ');
console.log(test);

test.length = 5;
console.log('And now I am an array!');
console.log(Array.prototype.slice.call(test));

