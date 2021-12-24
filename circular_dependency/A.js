const B = require('./B');
console.log(3, B);
exports.call = () => {
  console.log('B', B);
};
