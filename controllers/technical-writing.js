/**
 * GET /
 * Home page.
 */
exports.index = (req, res) => {
  res.render('technical-writing', {
    title: 'Developing a beta from scratch'
  });
};