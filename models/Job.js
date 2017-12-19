const mongoose = require('mongoose')
const { Schema } = mongoose;


const jobSchema = new Schema(
	{
		title : String, 
		company : {type: mongoose.Schema.Types.ObjectId, ref: 'Company'}, 
		salary : Number,
		equity : Number,
	}, {timestamps: true} //does this work?????
);


const Job = mongoose.model('Job', jobSchema);

module.exports = Job;