var express = require('express');
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
					es.status(400).send(e);
				})

});

app.get('/todo/:id', (req, res) => {

				res.send(req.params);
				var id = req.params.id;

				//valid id using is valid 
					

});





app.listen(3000, () => {
		console.log('server started in port 3000');
});

