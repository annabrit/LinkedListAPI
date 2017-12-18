const mongoose = require('mongoose')
const { Schema } = mongoose;


const userSchema = new Schema(
	{
		firstName : String, //add character limit later!
		lastName : String, //add character limit later!
		userName : { type : 'String', unique : true }, //limit
		password : String, //change!
		currentCompany : {type: mongoose.Schema.Types.ObjectId, ref: 'Company'},
		photo : String, //valid url? needs check??
		experience : 
			[{
				jobTitle : String,
				company : {type: mongoose.Schema.Types.ObjectId, ref: 'Company'},
				startDate : Date, //???
				endDate : Date
			}],
		education : 
			[{
				institution : String,
				degree : String,
				endDate : Date //??
			}],	
		skills : [String]		
	}, {timestamps: true} //does this work?????
);


const User = mongoose.model('User', userSchema);

module.exports = User;