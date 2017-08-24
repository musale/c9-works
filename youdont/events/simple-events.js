var events = require('events');
var emitter = new events.EventEmitter();

emitter.once('byten', function(){
	console.log('First divisor of ten');
});

emitter.on('odd', function(num){
	console.log(`${num} is odd`);
});

emitter.on('even', function(num){
	console.log(`${num} is even`);
});

for(var i=0; i<100; i++){
	if (i%2 === 0) {
		emitter.emit('odd', i);
	}

	if (i%2 !== 0) {
		emitter.emit('even', i);
	}

	if (i%10 === 0) {
		emitter.emit('byten', i);
	}
}
