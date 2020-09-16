// eslint-disable-next-line no-undef
module.exports = (err,req, res, next) => {
    res.status(500).send('Error 500');
    res.end();
  };
  