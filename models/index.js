const mongoose = require('mongoose')
mongoose.Promise = Promise;
mongoose.set('debug', true);

mongoose
	.connect('mongod://localhost/linkedList-db', {
		useMongoClient: true
	})
	.then(() => {
		console.log('Connected to MongoDB!');
	})
	.catch(err => {
		console.error(err);
	})

exports.User = require('./User')	