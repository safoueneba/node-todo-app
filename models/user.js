var mongoose = require('mongoose');


var User = mongoose.model('user_mongoose', {

		email : {
			type : String,
			require : true, //the value must exist
			minlength : 1,
			trim : true // eliminate the space of string
		}
});



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