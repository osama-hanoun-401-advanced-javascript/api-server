'use strict';

const express = require('express');
app.use(express.json());

const cors = require('cors');
const morgan = require('morgan');
const routes = require('../routes/food.js');
const app = express();
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));
app.use(routes);

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
let unless = function(path, middleware) {
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