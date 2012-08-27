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
}).call(this);
