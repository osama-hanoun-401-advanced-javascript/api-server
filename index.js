/* eslint-disable no-undef */
'use strict';
const mongoose = require('mongoose');
const serverModule = require('./lib/server.js');
require('dotenv').config();
let port =process.env.PORT;

const MONGOOSE_URL =process.env.MONGOOSE_URL;

const mongooseOptions = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true
};

mongoose.connect(MONGOOSE_URL, mongooseOptions)
  .then(() =>{
    serverModule.start(port);
  }).catch(err=>{
    console.error('Failed to connect to MANGODB',err);
  });
