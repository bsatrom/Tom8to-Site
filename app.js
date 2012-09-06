(function() {
  var app, express, routes, less;

  express = require('express');
  less = require('less');

  routes = require('./routes/routes');

  app = module.exports = express.createServer();
  
  app.configure(function() {
    app.set('views', __dirname + '/views');
    app.set('view engine', 'jade');
    app.enable('view cache');
    app.set('view options', {
      layout: false
    });
     
    app.use(express.compiler({ src: __dirname + '/public', enable: ['less'] }));
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(app.router);
    return app.use(express.static(__dirname + '/public'));
  });

  app.configure('development', function() {
    return app.use(express.errorHandler({
      dumpExceptions: true,
      showStack: true
    }));
  });
  
  app.configure('production', function() {
    return app.use(express.errorHandler());
  });

  app.get('/', routes.index);
  app.get('/about', routes.about);
  app.get('/intro', routes.intro);
  app.get('/privacy', routes.privacy)

  var port = process.env.PORT || 3000;
  app.listen(port);

  console.log("Express server listening on port %d in %s mode", port, app.settings.env);
}).call(this);
