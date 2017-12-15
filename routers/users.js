const express = require('express');

const  { usersHandler } = require('../handlers');

const router = express.Router();

router
	.route('/users')
		.get(usersHandler.getUsers) 
		.post(usersHandler.createUser)

router
	.route('/users/:id')
		.get(usersHandler.getUser)
		.patch(usersHandler.updateUser) 
		.delete(usersHandler.deleteUser)


module.exports = router;						