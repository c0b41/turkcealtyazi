
/**!
 * Turkcealtyazi
 * @author Ayhankuru   <cobaimelan@protonmail.ch>
 * @license MIT
 */


var cheerio = require('cheerio');
var got     = require('got');
var util    = require('util');
var WebUrl  = 'http://www.turkcealtyazi.org';


/**
* @method query
* @desc turkcealtyazi query method
* @param {string} id - imdb id or turkcealtyazi.org id - 0944947
* @returns {function} promise
*/
function query(id){

		return got(util.format('%s/find.php?find=%s&cat=sub',WebUrl,id))
		.then(function(data){

			var $ = cheerio.load(data.body,{decodeEntities:false});

				var list = [];

				var $chunk =cheerio.load($('#altyazilar').html(),{decodeEntities:false});

				$chunk('.row-class2,.row-class1').each(function(i, elem) {
				  var chunk = cheerio.load($chunk(this).html());
				    list.push({
							title :chunk('.fl').text().trim(),
							href: util.format('%s%s',WebUrl,chunk('a').eq(0).attr('href')),
			      	translator:chunk('.alcevirmen').text(),
			      	release:chunk('.alrelease').text().trim(),
							uploader:chunk('.algonderen').text(),
			      	lang:chunk('.aldil').children('span').attr('class').replace('flag','')
						});
				});


				return list;

		});
}


 /**
 * @method download
 * @desc turkcealtyazi download method
 * @param {string} href - turkcealtyazi.org subtitle url
 * @returns {function} promise
 */
function download(href){

  	return got(href).then(function(data){

			var  $ = cheerio.load(data.body,{decodeEntities:false});
  	  var downurl =$('input[name="adres"]').val();

			if(typeof downurl == 'undefined') return null;
 			return util.format('%s/%s%s',WebUrl,"subs/down1/",downurl);

  	});
}




exports.query = query;
exports.download = download;
