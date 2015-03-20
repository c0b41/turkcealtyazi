var Promise = require('bluebird');
var cheerio = require('cheerio');
var rq 		= require('request-promise');
var url     ='http://www.turkcealtyazi.org';


function turkcealtyazi(id){

	return new Promise(function (resolve, reject) {
		
		rq('http://www.turkcealtyazi.org/find.php?find='+id+'&cat=sub').then(function(data){
				var  $ = cheerio.load(data,{decodeEntities:false});
				var $block =cheerio.load($('.nblock').eq(7).html(),{decodeEntities:false});
				
				var list = [];

				$block('.altsonsez2').each(function(i, elem) {
					var chunk = cheerio.load($block(this).html());
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


 
module.exports = exports =turkcealtyazi; 