/**
 * Created by jebai on 8/13/15.
 */
module.exports = function(server) {
  // Install a `/` route that returns server status
  server.get('/login', function (req, res, next){

    console.info("enter login");

    res.render('pages/login.ejs', {
      user: req.user,
      url: req.url
    });
  });

  server.get('/', function (req, res, next){

    console.info("enter login");

    res.render('pages/index.ejs', {
      user: {
        email : "jebai@163.com"
      },
      url: req.url

    });
  });
};
