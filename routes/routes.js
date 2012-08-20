(function() {
  exports.index = function(req, res) {
    return res.render('index', {
      title: 'Tom8to - Pomodoro for Windows 8'
    });
  };

  exports.aboutUs = function(req, res) {
    return res.render('about', {
      title: 'Tom8to - About'
    });
  };

  exports.contact = function(req, res) {
    return res.render('contact', {
      title: 'Tom8to - Contact Us'
    });
  };
}).call(this);
