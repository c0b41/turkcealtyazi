var Promise = require('bluebird');
var cheerio = require('cheerio');
var got     = require('got-promise').promise;
var url     ='http://www.turkcealtyazi.org';


function turkcealtyazi(id){

	return new Promise(function (resolve, reject) {
		
		got('http://www.turkcealtyazi.org/find.php?find='+id+'&cat=sub').then(function(data){
				var  $ = cheerio.load(data.body,{decodeEntities:false});
				var eqs =[5,6,7];
				var select;
				for (var i =0; i < eqs.length; i++) {
					if($('.nblock').eq(eqs[i]).children().length > 2){
						select=eqs[i];
					}
				};

				var list = [];

				var $chunk =cheerio.load($('.nblock').eq(select).html(),{decodeEntities:false});

				

				$chunk('.row-class2,.row-class1').each(function(i, elem) {
					var chunk = cheerio.load($chunk(this).html());
					list.push({
							title :chunk('.fl').text().trim(),
							href:url+chunk('a').eq(0).attr('href'),
							translator:chunk('.alcevirmen').text(),
							release:chunk('.alrelease').text().trim(),
							uploader:chunk('.algonderen').text(),
							lang:chunk('.aldil').children('span').attr('class').replace('flag','')

						}) 
				});

 		
				resolve(list);

		}).catch(function(err){
			reject(err);
		});


	});


}


function download(href){
  return new Promise(function (resolve, reject) {

  	got(href).then(function(data){
  		var  $ = cheerio.load(data.body,{decodeEntities:false});
  	    var url =$('input[name="adres"]').val();
  	    	url ="http://www.turkcealtyazi.org/subs/down1/"+url;
  			resolve(url);

  	}).catch(function(err){
  			reject(err);
  	})
  	
  });
}



 
exports.query =turkcealtyazi; 
exports.download =download; 