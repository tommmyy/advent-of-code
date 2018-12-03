const R = require('ramda');

const addNumbers = R.useWith(R.add, [Number, Number]);
const splitLines = R.split('\n');

module.exports = R.o(R.reduce(addNumbers, 0), splitLines);
