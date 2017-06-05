var mongoose = require('mongoose');



var Todo = mongoose.model('todo_mongoose', {

		text : {
			type : String,
			require : true, //the value must exist
			mlength : 1,
			trim : true // eliminate the space of string
		},
		completed : {
			type : Boolean,
			default : true
		},
		completedAt : {
			type : Number,
			default : 100
		}
});



// var newTodo = new Todo({
// 	text : 'some mangoose text with 3 property',
// 	completed : true,
// 	completedAt : 45664
// });

// newTodo.save().then((doc) => {
// 	console.log('Saved todo',JSON.stringify(doc, undefined, 5));
// }, (e) => {
// 	console.log('unable to save todo');
// });


module.exports = {
	Todo
};