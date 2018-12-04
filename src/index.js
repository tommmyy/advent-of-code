const fs = require('fs');
const R = require('ramda');

const scriptName = process.argv[process.argv.length - 1];
const parse = R.o(R.init, R.split('\n'));

const data = parse(fs.readFileSync('./src/data/' + scriptName + '.txt', 'utf8'));

const run = require('./' + scriptName).run;

console.log(run(data));
