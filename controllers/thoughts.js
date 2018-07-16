/**
 * GET /
 * Home page.
 */
exports.index = (req, res) => {
  res.render('thoughts', {
    title: 'Thoughts'
  });
};