/* eslint-disable no-undef */
/* eslint-disable new-cap */
'use strict';

const mongoose = require('mongoose');

const product = mongoose.Schema({
  name: { type: String, required: true},
  display_name: {type: String, required: true},
  description: { type: String,required: true}
});

module.exports = mongoose.model('product', product);
