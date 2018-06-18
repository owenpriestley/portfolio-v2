/**
 * GET /
 * Home page.
 */
exports.index = (req, res) => {
  res.render('projects', {
    title: 'Projects'
  });
};
