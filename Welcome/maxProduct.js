var readline = require('readline');
var numberOfElements = 0;
var elements;
var ints = [];

process.stdin.setEncoding('utf8');
var rl = readline.createInterface({
  input: process.stdin,
  terminal: false
});

rl.on('line', readLine);

function readLine(line) {
  console.log('in readline');
  console.log('number of element', numberOfElements);
  if (line !== "\n") {
    if (numberOfElements === 0) {
        console.log('first');
        numberOfElements = parseInt(line.toString(), 10);
        console.log('number of elements', numberOfElements);
    } else {
        console.log('second');
        elements = line.toString().split(' ');
        for (i = 0; i < numberOfElements; i++) {
            ints[i] = parseInt(elements[i], 10);
        }
        console.log(ints);
        process.exit();
    }
  }
}
