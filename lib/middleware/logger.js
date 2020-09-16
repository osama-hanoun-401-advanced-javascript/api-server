// eslint-disable-next-line no-undef
module.exports = (req, res, next) => {
  console.log('__REQUEST__: ', req.method, req.path);
  next();
};
