const express = require('express');

const userHandler = //add this in

const router = express.Router();

router
	.route('/users')
		.get() //put function here
		.post() //put function here

router
	.route('/users/new')
		.get() //put function here

router
	.route('/users/:id')
		.get(//function)
		.patch(//function from handler) 
		.delete(//function from handler)

router
	.route('/users/:id/edit')
		.get()

module.exports = router;						