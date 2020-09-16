/* eslint-disable no-undef */
'use strict';

const express = require('express');
const app = express();
app.use(express.json());

const cors = require('cors');
const morgan = require('morgan');
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));
const productRoutes = require('./routes/product');
const categoryRoutes = require('./routes/categories');


/** Middleware */
const timestamp = require('./middleware/timestamp.js');
const logger = require('./middleware/logger.js');
const errorHandler_404 = require('./middleware/404.js');
const errorHandler_500 = require('./middleware/500.js');
app.use(timestamp);
app.use(logger);
app.use(productRoutes);
app.use(categoryRoutes);
app.use('*',errorHandler_404);
app.use( errorHandler_500);

function start(port) {
  app.listen(port || 3000, () => {
    console.log(`Server running on port:${port}`);
  });
}

module.exports = {
  server: app,
  start: start,
};
