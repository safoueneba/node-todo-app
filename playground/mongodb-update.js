const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;

//the code above is the same with object distructuring 
//const {MongoClient} = require('mongodb');




MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {

	if (err){
		return console.log('unable to connect to mongodb srever');
	}

console.log('connected to mangodb server');

	
	// db.collection('Todos').find({text : 'sone text from mongorobo'}).toArray()
	// .then((docs) => {
	// 	console.log('Todos -----');
	// 		console.log(JSON.stringify(docs, 'undefind', 2));


	// }, (err) =>{
	// 	console.log('unable fo fetch Todos',err);
	// });

	
// updating script 

	db.collection('Users').findOneAndUpdate(
		{_id : new ObjectID('59332d16ed3da20e2cb07772')},
	 { $set : {namr : 'safouene ba updated name'}, $inc: { age : +2}}, 
	 { returnOriginal : false})
	.then((result) => {
		console.log(result);
	});
  
  db.close();
});
