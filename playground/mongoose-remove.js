var ObjectId = require('./../db/mongoose.js').ObjectId;
var mongoose = require('./../db/mongoose.js').mongoose;
var Todo = require('./../models/todo.js').Todo;
var User = require('./../models/user.js').User;


Todo.findByIdAndRemove('5935cec01a31af048dd05b25').then((todo) =>  {

	console.log(todo);

}, (e) => {
	console.log(e);
})