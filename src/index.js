const fs = require('fs');

const scriptName = process.argv[process.argv.length - 1];

const data = fs.readFileSync('./src/data/' + scriptName + '.txt', 'utf8');

const run = require('./' + scriptName);

console.log(run(data));
