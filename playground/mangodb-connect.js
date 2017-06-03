const MongoClient = require('mongodb').MongoClient;
//the code above is the same with object distructuring 
//const {MongoClient} = require('mongodb');


// MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {

// 	if (err){
// 		return console.log('unable to connect to mongodb srever');
// 	}

// console.log('connected to mangodb server');

	
// 	db.collection('Todos').insertOne({

// 		text : 'something to do',
// 		completed : false

// 	}, (err, result) => {
// 		if (err){
// 			return console.log('enable to insert todo',err);
// 		}

// 		console.log(JSON.stringify(result.ops, 'undefind', 2));
// 	});

// 	db.close();
// });

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {

	if (err){
		return console.log('unable to connect to mongodb srever');
	}

console.log('connected to mangodb server');

	
	db.collection('Users').insertOne({

		nam : 'safouene ba',
		age : 29,
		location : 'undefined'

	}, (err, result) => {
		if (err){
			return console.log('enable to insert todo',err);
		}

		console.log(JSON.stringify(result.ops, 'undefind', 2));
	});

	db.close();
});