var Job = require('./job.js')
var job = new Job()
var jobId = 123

job.on('done', function(){
	console.log(`Worked on job ${jobId}`)
	job.emit('end', {job: jobId})
})

job.emit('start', {job: jobId})
