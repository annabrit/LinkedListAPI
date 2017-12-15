const mongoose = require('mongoose')
const { schema } = mongoose;


const userSchema = new Schema(
	{
		firstName : String, //add character limit later!
		lastName : String, //add character limit later!
		userName : { type : 'String', unique : true } //limit
		password : Password, //?????
		currentCompany : ,//reference association thingy
		photo : String, //valid url? needs check??
		experience : 
			[{
				jobTitle : String,
				company : ,//association 
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

module.exports = Item;