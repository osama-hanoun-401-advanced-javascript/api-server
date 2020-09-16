'use strict';
const mongoose = require('mongoose');
const serverModule = require('./lib/server.js');
require('dotenv').config();
let port =process.env.PORT;

const MONGOOSE_URL = 'mongodb://localhost:27017/food-db';

const mongooseOptions = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
}

mongoose.connect(MONGOOSE_URL, mongooseOptions);

serverModule.start(port);
