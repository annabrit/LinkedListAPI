const mongoose = require('mongoose')
const { Schema } = mongoose;


const companySchema = new Schema(
	{
		name: String, // add character limit
		email: String, // add limit
		handle: String, // limit 
		password: String, // limit 
		logo: String, // valid URL
		employees :
			[{
				userId: {type: mongoose.Schema.Types.ObjectId, ref: 'User'}
			}],
		jobs :
			[{
				jobId: {type: mongoose.Schema.Types.ObjectId, ref: 'Job'}
			}]
	}
);


const Company = mongoose.model('Company', companySchema);

module.exports = Company;