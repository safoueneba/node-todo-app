const MongoClient = require('mongodb').MongoClient;
//the code above is the same with object distructuring 
//const {MongoClient} = require('mongodb');




MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {

	if (err){
		return console.log('unable to connect to mongodb srever');
	}

console.log('connected to mangodb server');

	
	db.collection('Todos').find({text : 'sone text from mongorobo'}).toArray()
	.then((docs) => {
		console.log('Todos -----');
			console.log(JSON.stringify(docs, 'undefind', 2));


	}, (err) =>{
		console.log('unable fo fetch Todos',err);
	});

		

	

	//db.close();
});