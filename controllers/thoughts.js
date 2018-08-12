/**
 * GET /thoughts
 * Blog posts and thoughts.
 */
exports.index = (req, res) => {
  res.render('thoughts', {
    title: 'Thoughts'
  });
};