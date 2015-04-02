[![Travis Build Status](http://img.shields.io/travis/ayhankuru/turkcealtyazi.svg?style=flat-square)](https://travis-ci.org/ayhankuru/turkcealtyazi) [![Circle Build Status](https://img.shields.io/circleci/project/ayhankuru/turkcealtyazi.svg?style=flat-square)](https://circleci.com/gh/ayhankuru/turkcealtyazi) [![Appveyor Build Status](https://img.shields.io/appveyor/ci/ayhankuru/turkcealtyazi.svg?style=flat-square)](https://ci.appveyor.com/project/ayhankuru/turkcealtyazi) [![Build Status](https://img.shields.io/david/ayhankuru/turkcealtyazi.svg?style=flat-square)](https://david-dm.org/ayhankuru/turkcealtyazi) [![io.js supported](https://img.shields.io/badge/io.js-supported-green.svg?style=flat-square)](https://iojs.org)





# turkcealtyazi

turkcealtyazi.org sitesindeki eklenmiş yazıları listelemeye yarayan modul.
 
#Kurulum
```Bash
npm install turkcealtyazi

```
#Kullanım

```js
var turkcealtyazi = require('turkcealtyazi');
```

```js
    // imdb id'si ile ulaşılabiliyor.. yada Turkçealtayazı.org sitesindeki id ile
    turkcealtyazi('1731998').then(function(data){
			console.log(data);
	}).catch(function(err){
		console.log(err);
	}) 
```



