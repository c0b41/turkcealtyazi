#! /usr/bin/env node
var omdb 		  = require('omdb-api');
var _			  = require('underscore');
var turkcealtyazi = require('../index.js');
var parseArgs     = require('minimist');
var fs			  = require('fs');


var args = parseArgs(process.argv),
	stdin = process.stdin,
    stdout = process.stdout;




function capitalize (text) {
    return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
} 
function validateURL(value) {
    return /^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(value);
}



if(args.d || args.download){
	var url = args.d || args.download; 
	if(validateURL(url)){

		turkcealtyazi.download(url)
		.then(function(result){
			stdout.write(result);
			stdout.write('\n');

		});	

	}else{
			stdout.write("Göndermiş olduğun değer url değil");
			stdout.write("\n");
	}
}else if(args.h || args.help){
	console.log(fs.readFileSync(__dirname+'/man.txt', "utf8"));
}else if(args.t || args.type){
	if(args.n || args.name){
		var string =capitalize(args.n || args.name);
		var type;
		if (args.t == "dizi" || args.type == "dizi"){
			type="series";
			show(type);

		}else if (args.t == "film" || args.type == "film"){
			type="movie";
			show(type);
		}else{
			console.log('Film yada dizi şeklinde belirtmeniz gerek \n [ turkcealtyazi -t "dizi" -n "game of thrones" ]');
		}

		
	}else{
		console.log('-n yada --name komutu ile film adı yada dizi adını belirtmeniz gerekmekte');	
	}

}else{
	console.log('Film yada dizi şeklinde belirtmeniz gerek \n [ turkcealtyazi -t "dizi" -n "game of thrones" ]');
}




function show(type){
	omdb({s:string,type:type,r:"json"}).then(function(data){
			if(data.Search){
				if(data.Search.length > 1){
					var result =_.find(data.Search, function(item) {
                                        return item.Title = string; 
                                    }); 
					if(typeof result !== undefined){

						turkcealtyazi.query(result.imdbID).then(function(data){ 
							
							stdout.write(JSON.stringify(data));
							stdout.write('\n');
						});

					}else{

						stdout.write("Movie Not Found");
						stdout.write('\n');

					}

				}else{
					 
							stdout.write(JSON.stringify(result));
							stdout.write('\n');
				

				}

			}else{
				stdout.write(data.Error);	
				stdout.write('\n');    		
			}
		});
}