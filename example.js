var turkcealtyazi = require('./index.js');

turkcealtyazi.query('0944947').then(function(data){ 
	console.log(data);
	console.log(data.length);
});