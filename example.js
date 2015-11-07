var turkcealtyazi = require('./index.js');

turkcealtyazi.query('0944947').then(data => {
  console.log(data);
})

turkcealtyazi.download("http://www.turkcealtyazi.org/sub/526505/silicon-valley.html")
.then(url => {
  console.log(url);
})
