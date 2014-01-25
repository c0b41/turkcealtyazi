# turkcealtyazi

Turkçealtayazı.org sitesindeki eklenmiş yazıları listelemeye yarayan modul.

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



