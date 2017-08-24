var utils = require('util')
var events = require('events')

var Job = function Job(){
	var job = this

	job.process = function(details){
		setTimeout(function(){
			job.emit('done', {job: details.job})
		}, 1000)
	}

	job.on('start', function(details){
		console.log(`Job ${details.job} has began`)
		job.process(details)
	})

	job.on('end', function(details){
		var end = new Date()
		console.log(`Job ${details.job} has finished at ${end}`)
	})
}

utils.inherits(Job, events.EventEmitter)
module.exports = Job
