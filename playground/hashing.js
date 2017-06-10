// hashing passwword using crypto-js
// var SHA256 = require("crypto-js/sha256");


// console.log(SHA256("safouene").toString());


// for more robust token hashing we use jsonwebtoken 
const jwt = require('jsonwebtoken');


var data = {

	id : 10
}

var token = jwt.sign(data, '123abc');
console.log('token : ',token);

var decoded = jwt.verify(token, '123abc');
console.log('decoded : ',decoded);

