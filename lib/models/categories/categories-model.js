'use strict';

const schema = require('./categories-schema');
const Model = require('../mongo');

class Category extends Model {
    constructor() {
        super(schema);
    }
   
}

module.exports = new Category();