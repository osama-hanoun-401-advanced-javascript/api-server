/* eslint-disable no-undef */
'use strict';

const timestamp = require('../lib/middleware/timestamp.js');
const express = require('express');
const supertest = require('supertest');
const app = express();
app.use(timestamp);
describe('timestamp Middleware', () => {
  let date;
  app.get('/testTimestampMiddleware', function (req, res) {
    date = res.requestTime;
    res.end();
  });
  it('properly puts the current timestamp on the request', () => {
    return supertest(app).get('/testTimestampMiddleware')
      .then(() => {
        expect(date.includes('GMT')).toBeTruthy();
      });

  });
});




