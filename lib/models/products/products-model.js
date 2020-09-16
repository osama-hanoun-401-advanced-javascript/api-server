'use strict';

const schema = require('./products-schema');
const Model = require('../mongo');

class Product extends Model {
    constructor() {
        super(schema);
    }
   
}

module.exports = new Product();