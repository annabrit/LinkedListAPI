const mongoose = require('mongoose')
mongoose.Promise = Promise;
mongoose.set('debug', true);

mongoose
	.connect('mongodb://localhost/linkedList-db', {
		useMongoClient: true
	})
	.then(() => {
		console.log('Connected to MongoDB!');
	})
	.catch(err => {
		console.error(err);
	})

exports.User = require('./User')	
exports.Job = require('./Job')
exports.Company = require('./Company')
