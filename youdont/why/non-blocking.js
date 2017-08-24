var fs = require('fs');

fs.readFile('test.txt', 'utf-8', function(error, content){
	console.log(content);
});

