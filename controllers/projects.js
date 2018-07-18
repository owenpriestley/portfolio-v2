exports.index = (req, res) => {
    res.render('projects', {
      title: 'Projects'
    });
  };

exports.writing = (req, res) => {
    res.render('developing-a-beta-from-scratch', {
      title: 'Developing a beta from scratch'
    });
  };
  
  exports.journey = (req, res) => {
    res.render('a-service-for-vulnerable-users', {
      title: 'Designing a service for vulnerable users'
    });
  };
  
  exports.benefits = (req, res) => {
    res.render('making-advice-accessible', {
      title: 'Making advice accessible'
    });
  };

  exports.benefits = (req, res) => {
    res.render('swatchify', {
      title: 'Swatchify'
    });
  };

