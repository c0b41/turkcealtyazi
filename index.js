var seven =require('seven');

function turkcealtyazi(id,fn){
var go = new seven();

	go.play('http://www.turkcealtyazi.org/find.php?find='+id+'&cat=sub',function(err,data){
		if(err){
			fn(err,null)
		}else{
			var block =go.matchall(data,'<div>','</div>');
			if(block !==null){
				if(block.length > 3){
				var _data=[];
				for (var i = 1; i < block.length-3; i++) {
					_data.push({title:block[i].clear(),href:"http://www.turkcealtyazi.org"+go.attr(block[i],'href'),desc:go.attr(block[i],'title')[0].clear()});
				};
					fn(null,_data);
				}else{
					fn(null,null);
				}
			}
		}
	});
}



module.exports = exports =turkcealtyazi;