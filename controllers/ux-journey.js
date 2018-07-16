/**
 * GET /
 * UX writing - Designing a journey for vulnerable users.
 */
exports.writing = (req, res) => {
  res.render('ux-writing', {
    title: 'Developing a beta from scratch'
  });
};

exports.journey = (req, res) => {
  res.render('ux-journey', {
    title: 'Designing a journey for vulnerable users'
  });
};
