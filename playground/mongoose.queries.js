var mongoose = require('./../db/mongoose');
var User = require('./../models/user.js').User;
var Todo = require('./../models/todo.js').Todo;



		Todo.findById('5935cec01a31af048dd05b25').then((todo) =>{
			//console.log(todo);
			if(todo.reason === undefined){
				return console.log('Unable to find the todo');
			}

				console.log(JSON.stringify(todo, undefined, 2));

			}, (e) => {
				console.log(e);
		});

