const mongoose = require('mongoose')
const { Schema } = mongoose;


const companySchema = new Schema(
	{
		name: String, // add character limit
		email: String, // add limit
		handle: String, // limit 
		password: String, // limit 
		logo: String, // valid URL
		employess :
			[{
				userId: String
			}],
		jobs :
			[{
				jobId: String
			}]
	}
);


const Company = mongoose.model('Company', companySchema);

module.exports = Company;