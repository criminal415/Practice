const A = require('./A');
console.log(4, A);
exports.call = () => {
  console.log('A', A);
};
