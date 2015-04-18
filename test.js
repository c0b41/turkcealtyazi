var turkcealtyazi = require('./index.js');
var expect = require('expect.js');


describe('Turkcealtyazi test', function() {

	describe('İnfo Test', function () {

			it('Drinking Buddies', function () {


				return turkcealtyazi.query('2265398').then(function(data){ 
						expect(data).to.be.an('object');
						expect(data.length).to.be(6);
						expect(data[0].title).to.eql('Drinking Buddies');	
						expect(data[0].translator).to.eql('DVDRip');
						expect(data[0].lang).to.eql('tr');
						

					});

			});

			it('Fight Club ', function () {


				return turkcealtyazi.query('tt0137523').then(function(data){ 

						expect(data).to.be.an('object');
						expect(data.length).to.be(41);
						expect(data[0].title).to.eql('Fight Club');	
						expect(data[0].translator).to.eql('DVDRip');
						expect(data[0].lang).to.eql('tr');
						expect(data[0].uploader).to.eql('nezikudur');
						

					});

			});

			it('Game of Thrones  ', function () {


				return turkcealtyazi.query('0944947').then(function(data){ 

						expect(data).to.be.an('object');
						expect(data.length).to.be(66);
						expect(data[0].title).to.eql('Game of Thrones');	
						expect(data[0].translator).to.eql('eşekherif');
						expect(data[0].lang).to.eql('tr');
						expect(data[0].uploader).to.eql('Divergent');
						

					});

			});

		
	});

	describe('Download Test', function () {

		it('Silicon Valley ', function () {
		
			return turkcealtyazi.download("http://www.turkcealtyazi.org/sub/526505/silicon-valley.html").then(function(url){
			expect(url).to.eql('http://www.turkcealtyazi.org/subs/down1/526505-Silicon-Valley-2014-DiziCD-23.976fps-TR-124kB-TurkceAltyazi-org.rar');
			});

		});


		it('Game Of Thrones', function () {

			return turkcealtyazi.download("http://www.turkcealtyazi.org/sub/575830/game-of-thrones.html").then(function(url){
			expect(url).to.eql('http://www.turkcealtyazi.org/subs/down1/575830-Game-of-Thrones-2011-1CD-23.976fps-TR-15kB-TurkceAltyazi-org.rar');
			});
			
		});

		it('Fight Club', function () {
			
			
			return turkcealtyazi.download("http://www.turkcealtyazi.org/sub/400902/fight-club.html").then(function(url){
			expect(url).to.eql('http://www.turkcealtyazi.org/subs/down1/400902-Fight-Club-1999-1CD-23.976fps-TR-51kB-TurkceAltyazi-org.rar');
			});

		});

		
	});
});



		  
		


