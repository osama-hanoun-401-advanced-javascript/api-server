const express = require('express');
const category = require('../models/categories/categories-model');
const router = express.Router();

router.get('/categorys', getCategory);
router.get('/categorys/:id', getCategory);

router.post('/categorys', postCategory); 

router.put('/categorys/:id',putCategory);

router.delete('/categorys/:id', deleteCategory);


function getCategory(req, res) {
    const id = req.params.id;
    category.get(id).then(data => {
        res.status(200).json(data);
    }).catch(next);
}
function postCategory(req, res, next) {
    console.log("req.body >>> ", req.body)
    category.create(req.body).then(data => {
        res.status(201).json(data);
    }).catch(err => {
        console.log(err);
        next();
    });
}
function putCategory(req, res, next) {
    const id = req.params.id;
    console.log("req.body >>> ", req.body)
    category.update(id,req.body).then(data => {
        res.status(201).json(data);
    }).catch(err => {
        console.log(err);
        next();
    });
}
function deleteCategory(req, res, next) {
    const id = req.params.id;
    console.log("req.body >>> ", req.body)
    category.delete(id,req.body).then(data => {
        res.status(201).json(data);
    }).catch(err => {
        console.log(err);
        next();
    });
}

module.exports = router;