var express = require('express');
var _ = require('lodash');
var ObjectId = require('./db/mongoose.js').ObjectId;
var bodyParser = require('body-parser');
var mongoose = require('./db/mongoose.js').mongoose;
var Todo = require('./models/todo.js').Todo;
var User = require('./models/user.js').User;



var app = express();
app.use(bodyParser.json());


// post her is for creating todos 
app.post('/todo', (req, res) => {

	//console.log(req.body);
				var newTodo = new Todo({
				text : req.body.text,
				});

				newTodo.save().then((doc) => {
					//console.log('Saved todo',JSON.stringify(doc, undefined, 5));
					res.send(doc);
				}, (e) => {
					//console.log('unable to save todo');
					res.status(400).send(e);

				});

});

app.get('/todo', (req, res) => {

				Todo.find().then((response) => {
					res.send({
						resonse,
						codeStatus : 400
					});
				}, (e) => {
					res.status(400).send(e);
				})

});

app.get('/todo/:id', (req, res) => {

				var _id = req.params.id;

				if(!mongoose.Types.ObjectId.isValid(_id)){
					//console.log('unvalid id ')
					return res.send('unvalid id');
				}

						Todo.findById(_id).then((todo) => {

									res.send({
										todo
									});
						}, (e) => {
							res.status(400).send(e);
						})

			
});

app.delete('/todo/:id', (req, res) => {

				var _id = req.params.id;

				if(!mongoose.Types.ObjectId.isValid(_id)){
					return res.status(400).send('unvalid id');
				}

						Todo.findByIdAndRemove(_id).then((todo) => {

							if(todo !== null){

								res.status(200).send({
										message : 'this todo is deleted succesfully',
										todo,
									});

							}

							res.status(400).send({
										message : 'todo not found'
									});


									
						}, (e) => {
							res.status(400).send(e);
						})

			
});


app.patch('/todo/:id', (req, res) => {

	var _id = req.params.id;
	var body = _.pick(req.body, ['text', 'completed']);
	if(!mongoose.Types.ObjectId.isValid(_id)){
			return res.status(400).send('unvalid id');
	}

	if(_.isBoolean(body.completed)&&body.completed){
		body.completedAt = new Date().getTime();
	}else{
		body.completed = false;
		body.completedAt = null;
	}

	Todo.findByIdAndUpdate(_id, {$set : body}, {new : true}).then((todo) => {
		if(todo !== undefined){
			res.send(todo);
		}



			res.status(404).send('todo not found with this id');

	}).catch((e) => {

			res.status(200).send(e);
	})


});

// Post /users
app.post('/users', (req, res) => {

	var body = _.pick(req.body, ['email', 'password']);


				var user = new User(body);

				user.save().then(() => {

					return user.generateAuthToken();
					

				}).then((token) => {

					res.header('x-auth', token).send(user);

				}).catch((e) => {
					res.status(404).send(e);
				})

});



app.listen(3000, () => {
		console.log('server started in port 3000');
});

