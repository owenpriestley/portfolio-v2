/**
 * GET /
 * UX writing - Designing a journey for vulnerable users.
 */
exports.index = (req, res) => {
  res.render('strategy-benefits', {
    title: 'Making advice accessible'
  });
};
