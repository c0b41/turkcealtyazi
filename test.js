var turkcealtyazi = require('./index.js');
var expect = require('expect.js');


describe('Mediumapp', function() {
	it('Test1', function(done) {
		   turkcealtyazi('sadas',function(err,data){
			expect(data).to.be(null)
			done();
			});
	});

	it('Test3', function(done) {
		   turkcealtyazi('2265398',function(err,data){
			expect(err).to.not.exist;
			expect(data).to.be.an('object');
			expect(data.length).to.be(5)
			done();
			});
	});
});



		  
		

