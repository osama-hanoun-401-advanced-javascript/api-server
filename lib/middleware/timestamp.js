// eslint-disable-next-line no-undef
module.exports = (req, res, next) => {
  res.requestTime=(new Date()).toUTCString();
  next();
};
