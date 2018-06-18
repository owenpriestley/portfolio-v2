/**
 * GET /
 * UX writing - Designing a journey for vulnerable users.
 */
exports.index = (req, res) => {
  res.render('ux-journey', {
    title: 'Designing a journey for vulnerable users'
  });
};
