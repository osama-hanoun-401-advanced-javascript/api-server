/* eslint-disable no-unused-vars */
/* eslint-disable new-cap */
/* eslint-disable no-undef */
'use strict';

const express = require('express');
const router = express.Router();

const product = require('../models/products/products-model');
const category = require('../models/categories/categories-model');


router.get('/api/v1/:model', handleAllGet);
router.get('/api/v1/:model/:id', handleAllGet);
router.post('/api/v1/:model', handleAllPost);
router.put('/api/v1/:model/:id', handleAllUpdate);
router.delete('/api/v1/:model/:id', handleAllDelete);


// router.post('/api/v1/:model', handleAllPost)

router.param('model', getModel); // it doesn't matter its order


// How will we get the right Model?
//
function getModel (req, res, next) {
  let model = req.params.model;
  switch(model) {
  case 'products':
    req.model = product;
    next();
    break;
  case 'categorys':
    req.model = category;
    next();
    break;
  default:
    next('Invalid Model!!! ');
    break;
  }
}

function handleAllGet(req, res, next) {
  let id = req.params.id;
  console.log('id>>>>>>>>>>>>>>>>>',id)

  req.model.get(id).then(results => {
    let count = results.length;
    res.json({ count, results});
  });
}

function handleAllPost(req, res, next) {
  req.model.create(req.body).then(result=> {
    res.json(result);
  }).catch(next);
}
function handleAllUpdate(req, res, next) {
  let id = req.params.id;
  req.model.update(id,req.body).then(result=> {
    res.json(result);
  }).catch(next);
}
function handleAllDelete(req, res, next) {
  let id = req.params.id;
  req.model.delete(id).then(result=> {
    res.json(result);
  }).catch(next);
}

module.exports = router;
