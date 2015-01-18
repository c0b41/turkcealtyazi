[![Build Status](http://img.shields.io/travis/ayhankuru/turkcealtyazi.svg?style=flat-square)](https://travis-ci.org/ayhankuru/turkcealtyazi)


[![Build Status](https://img.shields.io/david/ayhankuru/turkcealtyazi.svg?style=flat-square)](https://david-dm.org/ayhankuru/turkcealtyazi)





# turkcealtyazi

turkcealtyazi.org sitesindeki eklenmiş yazıları listelemeye yarayan modul.

### yeniden yazılması gerekiyor..
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
    turkcealtyazi('tt0434409',function(err,data){
           if(err) throw err
           else console.log(data) // Yazı bulunmadığı takdirde null değeri döner..
   });
```



