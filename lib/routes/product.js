/* eslint-disable new-cap */
/* eslint-disable no-undef */
const express = require('express');
const product = require('../models/products/products-model');
const router = express.Router();

router.get('/products', getProduct);
router.get('/products/:id', getProduct);

router.post('/products', postProduct);

router.put('/products/:id',putProduct);

router.delete('/products/:id', deleteProduct);


function getProduct(req, res) {
  const id = req.params.id;
  product.get(id).then(data => {
    res.status(200).json(data);
  }).catch(err => {
    console.log(err);
    next();
  });
}
function postProduct(req, res, next) {
  console.log('req.body >>> ', req.body);
  product.create(req.body).then(data => {
    res.status(201).json(data);
  }).catch(err => {
    console.log(err);
    next();
  });
}
function putProduct(req, res, next) {
  const id = req.params.id;
  console.log('req.body >>> ', req.body);
  product.update(id,req.body).then(data => {
    res.status(201).json(data);
  }).catch(err => {
    console.log(err);
    next();
  });
}
function deleteProduct(req, res, next) {
  const id = req.params.id;
  console.log('req.body >>> ', req.body);
  product.delete(id,req.body).then(data => {
    res.status(201).json(data);
  }).catch(err => {
    console.log(err);
    next();
  });
}

module.exports = router;
