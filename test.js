var turkcealtyazi = require('./index.js');
var expect = require('expect.js');


describe('Turkcealtyazi test', function() {

	it('Test İnfo 1', function () {


		return turkcealtyazi.query('2265398').then(function(data){ 
				expect(data).to.be.an('object');
				 expect(data.length).to.be(3);
				expect(data[0].title).to.eql('Drinking Buddies');	
				expect(data[0].translator).to.eql('DVDRip');
				expect(data[0].lang).to.eql('tr');
				

			});

	});

	it('Test İnfo 2 ', function () {


		return turkcealtyazi.query('tt0137523').then(function(data){ 
				expect(data).to.be.an('object');

				expect(data.length).to.be(21);
				expect(data[0].title).to.eql('Fight Club');	
				expect(data[0].translator).to.eql('DVDRip');
				expect(data[0].lang).to.eql('tr');
				expect(data[0].uploader).to.eql('nezikudur');
				

			});

	});

	it('Test Download', function () {
		
		return turkcealtyazi.download("http://www.turkcealtyazi.org/sub/526505/silicon-valley.html").then(function(url){
		expect(url).to.eql('http://www.turkcealtyazi.org/subs/down1/526505-Silicon-Valley-2014-DiziCD-23.976fps-TR-124kB-TurkceAltyazi-org.rar');
		});

	});
});



		  
		


