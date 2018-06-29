/**
 * GET /
 * Home page.
 */
exports.index = (req, res) => {
  res.render('projects', {
    title: 'Projects'
  });
};

exports.ux = (req, res) => {
  res.render('ux-journey', {
    title: 'Designing a journey for vulnerable users'
  });
};