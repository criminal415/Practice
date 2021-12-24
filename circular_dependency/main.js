console.log('hellow word');
const A = require('./A');
console.log(0, A);
const B = require('./B');
console.log(1, B);
A.call();
console.log(2);
B.call();
