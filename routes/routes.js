(function() {
  exports.index = function(req, res) {
    return res.render('index', {
      title: 'Tom8to - Pomodoro for Windows 8'
    });
  };

  exports.about = function(req, res) {
    return res.render('about', {
      title: 'Tom8to - About'
    });
  };

  exports.intro = function(req, res) {
    return res.render('intro', {
      title: 'Tom8to - Intro Video'
    });
  };

  exports.privacy = function(req, res) {
    return res.render('privacy', {
      title: 'Tom8to - Privacy Policy'
    });
  };
}).call(this);
