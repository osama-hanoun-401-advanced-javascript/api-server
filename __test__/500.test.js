'use strict';

const _500Middleware = require('../lib/middleware/500.js');
const express = require('express');
const supertest = require('supertest');
const app = express();
app.use(_500Middleware);
app.get('/test500Middleware', function (req, res) {
});

describe('500 Middleware', () => {

    it('properly send and status requests', () => {
        return supertest(app).get('/test500Middleware')
            .then(result => {
                expect(result.status).toBe(500);
                expect(result.text).toBe('Error 500');

            })
    });

});




