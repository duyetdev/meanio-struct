'use strict';

/* jshint -W098 */
// The Package is past automatically as first parameter
module.exports = function(Thesis, app, auth, database) {

  app.get('/api/thesis/example/anyone', function(req, res, next) {
    res.send('Anyone can access this');
  });

  app.get('/api/thesis/example/auth', auth.requiresLogin, function(req, res, next) {
    res.send('Only authenticated users can access this');
  });

  app.get('/api/thesis/example/admin', auth.requiresAdmin, function(req, res, next) {
    res.send('Only users with Admin role can access this');
  });

  app.get('/api/thesis/example/render', function(req, res, next) {
    Thesis.render('index', {
      package: 'thesis'
    }, function(err, html) {
      //Rendering a view from the Package server/views
      res.send(html);
    });
  });
};
