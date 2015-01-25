var turkcealtyazi = require('./index.js');
var expect = require('expect.js');


describe('Turkcealtyazi test', function() {
	it('Test :1', function (done) {

		turkcealtyazi('2265398').then(function(data){ 
				expect(data).to.be.an('object'); 
				expect(data.length).to.be(6)
				expect(data[0].title).to.eql('Drinking Buddies');	
				expect(data[0].translator).to.eql('DVDRip');
				expect(data[0].lang).to.eql('tr');
				done(); 

			},function(err){
				console.log(err);
				expect(err).to.exist;
				done();
			});

	});
});



		  
		


