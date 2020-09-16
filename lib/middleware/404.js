// eslint-disable-next-line no-undef
module.exports = (req, res, next) => {
  res.send('Error >>>> 404').status(404);
  res.end();
};
