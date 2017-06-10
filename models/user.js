const mongoose = require('mongoose');
const validator = require('validator');
const jwt = require('jsonwebtoken');
const _ = require('lodash');

var UserSchema = new mongoose.Schema({

	email : {
			type : String,
			require : true, //the value must exist
			minlength : 1,
			trim : true, // eliminate the space of string
			unique : true,
			validate : {

				validator : validator.isEmail,
				message : '{VALUE} is not a valid isEmail'

			}
			
		},
		password : {
			type : String,
			require : true, 
			minlength : 6
		},
		tokens : [{
			access : {
				type : String,
				require : true,
			},
			token : {
				type : String,
				require : true,
			}
		}]

});

UserSchema.methods.toJSON = function () {
	var user = this;
	var userToObject = 	user.toObject(); 

	return _.pick(userToObject, ['_id' ,'email']);

}

UserSchema.methods.generateAuthToken = function () {

	var user = this;
	var access = 'auth';
	var token = jwt.sign({_id : user._id.toHexString(), access}, 'abc123').toString();
	user.tokens.push({access, token});

	return user.save().then(() => {
		return token; 
	});
}


var User = mongoose.model('user_mongoose', UserSchema);

		



// var newUser = new User({
// 	text : 'azerty@gmail.com',
	
// });

// newTodo.save().then((doc) => {
// 	console.log('Saved user',JSON.stringify(doc, undefined, 5));
// }, (e) => {
// 	console.log('unable to save user');
// });



module.exports = {
	User
};