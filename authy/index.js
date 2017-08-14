var express = require('express');
var stormpath = require('express-stormpath');
 
var app = express();
 
app.use(stormpath.init(app, {
  client: {
    apiKey: {
      id: 'xxx',
      secret: 'xxx',
    }
  },
  application: {
    href: 'xxx'
  }
}));
 
app.on('stormpath.ready', function () {
  console.log('Stormpath Ready');
});
 
app.listen(3000);
