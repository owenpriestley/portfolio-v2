/**
 * GET /examples
 * Examples.
 */
exports.index = (req, res) => {
  res.render('examples', {
    title: 'Examples'
  });
};