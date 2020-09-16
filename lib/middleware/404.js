/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-undef
module.exports = (req, res, next) => {
  res.status(404).send('Error 404');
  res.end();
};
