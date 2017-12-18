const express = require('express');

const  { jobsHandler } = require('../handlers');

const router = express.Router();

router
	.route('/jobs')
		.get(jobsHandler.getJob) 
		.post(jobsHandler.createJob)

router
	.route('/job/:id')
		.get(jobsHandler.getJob)
		.patch(jobsHandler.updateJob) 
		.delete(jobsHandler.deleteJob)


module.exports = router;	