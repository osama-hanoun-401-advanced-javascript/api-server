/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
'use strict';

const _404Middleware = require('../lib/middleware/404.js');
const express = require('express');
const supertest = require('supertest');
const app = express();
app.use(_404Middleware);
app.get('/test404Middleware', function (req, res) {
});

describe('404 Middleware', () => {

  it('properly send and status requests', () => {
    return supertest(app).get('/test404Middleware')
      .then(result => {
        expect(result.status).toBe(404);
        expect(result.text).toBe('Error 404');
      });
  });

});




