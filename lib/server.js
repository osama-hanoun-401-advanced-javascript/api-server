/* eslint-disable no-undef */
'use strict';

const express = require('express');
const app = express();
app.use(express.json());

const cors = require('cors');
const morgan = require('morgan');
// const productRoutes = require('./routes/product');
// const categoryRoutes = require('./routes/categories');

app.use(express.json());
app.use(cors());
app.use(morgan('dev'));
// app.use(productRoutes);
// app.use(categoryRoutes);

/** Middleware */
const timestamp = require('./middleware/timestamp.js');
const logger = require('./middleware/logger.js');
const errorHandler_404 = require('./middleware/404.js');
const errorHandler_500 = require('./middleware/500.js');
app.use(timestamp);
app.use(logger);

let products = {
  'id': '1',
  'category': '1',
  'name': 'lenovo',
  'display_name': 'Lenovo',
  'description': 'ThinkPad'
};
app.post('/products', (req, res, next) => {
  try {
    if (req.body.id) {
      res.send('created');
    } else {
      throw 500;
    }
  }
  catch (err) {
    next(err);
  }
});

app.get('/products', (req, res) => {
  res.send(products);
});

app.get('/products/:id', (req, res) => {
  res.send(products);
});

app.put('/products/:id', (req, res, next) => {
  try {
    if(!req.params.id){
      throw 500;
    }
    res.send('updated');
  }
  catch (err) {
    next(err);
  }


});

app.delete('/products/:id', (req, res, next) => {
  try {
    if(!req.params.id){
      throw 500;
    }
    res.send('deleted');
  }
  catch (err) {
    next(err);
  }
});


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
