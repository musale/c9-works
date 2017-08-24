var fs = require('fs');

fileContents = fs.readFileSync('test.txt', 'utf-8');

console.log(fileContents);
