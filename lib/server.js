'use strict';

const express = require('express');
const app = express();
app.use(express.json());


/** Middleware */
const timestamp = require('./middleware/timestamp.js');
const logger = require('./middleware/logger.js');
const errorHandler_404 = require('./middleware/404.js');
const errorHandler_500 = require('./middleware/500.js');
app.use(timestamp);
app.use(logger);

let products = {
    "id": "1",
    "category": "1",
    "name": "lenovo",
    "display_name": "Lenovo",
    "description": "ThinkPad"
};
app.post('/products', (req, res, next) => {
    try {
        if (req.body.id) {
            res.send('created');
        } else {
            throw new Error();
        }
    }
    catch (err) {
        next();
    }
});

app.get('/products', (req, res) => {
    res.send(products)
});

app.get('/products/:id', (req, res, next) => {
            res.send(products)
});

app.put('/products/:id', (req, res, next) => {
    try {
        if(!req.params.id){
            throw new Error();
        }
        res.send('updated');
    }
    catch (err) {
        next();
    }


});

app.delete('/products/:id', (req, res, next) => {
    try {
        if(!req.params.id){
            throw new Error();
        }
        res.send('deleted');
    }
    catch (err) {
        next();
    }
});
var unless = function(path, middleware) {
    return function(req, res, next) {
        if (path === req.path) {
            return middleware(req, res, next);
        } else {
            return next();
        }
    };
};

app.use(unless('/products', errorHandler_500));

app.get('*', (req, res, next) => {
    next();
},errorHandler_404);


function start(port) {
    app.listen(port || 3000, () => {
        console.log(`Server running on port:${port}`);
    });
};

module.exports = {
    server: app,
    start: start,
};