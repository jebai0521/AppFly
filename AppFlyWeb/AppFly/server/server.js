var loopback = require('loopback');
var boot = require('loopback-boot');
var flash = require('express-flash');
var path = require('path');

var app = module.exports = loopback();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.start = function() {
  // start the web server
  return app.listen(function() {
    app.emit('started');
    console.log('Web server listening at: %s', app.get('url'));
  });
};

app.use(flash());
app.middleware('auth', loopback.token({
  model: app.models.accessToken
}));
app.middleware('session:before', loopback.cookieParser(app.get('cookieSecret')));

// Bootstrap the application, configure models, datasources and middleware.
// Sub-apps like REST API are mounted via boot scripts.
boot(app, __dirname, function(err) {
  if (err) throw err;

  // start the server if `$ node server.js`
  if (require.main === module)
    app.start();
});
