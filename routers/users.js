const express = require('express');

const usersHandler = require('../handlers');

const router = express.Router();

router
	.route('/users')
		.get(usersHandler.getUsers) //put function here
		.post(usersHandler.createUser) //put function here

router
	.route('/users/:id')
		.get(usersHandler.getUser)
		.patch(usersHandler.updateUser) 
		.delete(usersHandler.deleteUser)


module.exports = router;						