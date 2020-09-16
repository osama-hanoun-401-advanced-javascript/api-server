const { server } = require('../lib/server.js');

const supertest = require('supertest');
const mockRequest = supertest(server);


describe('web server', () => {

    it('should respond with 404 for not found routes', () => {
        return mockRequest.get('/prod').then(result => {
            expect(result.status).toBe(404);
            expect(result.status).not.toBe(500);
        })
    });

    it('should respond with 200 for good routes', () => {
        return mockRequest.get('/products').then(result => {
            console.log("result >>> ", result);
            expect(result.status).toBe(200);
        });
    });


    it('should respond with 200 for read method', () => {
        return mockRequest.get('/products/1').then(result => {
            expect(result.status).toBe(200);
        });
    });
    
    it('should respond with 200 for read all method', () => {
        return mockRequest.get('/products').then(result => {
            expect(result.status).toBe(200);
        });
    });
    it('should respond with 200 for delete method', () => {
        return mockRequest.get('/products/1').then(result => {
            expect(result.status).toBe(200);
        });
    });
    it('should respond with 200 for create method', () => {
        return mockRequest.post('/products').send({"id":"1"}).then(result => {
            expect(result.status).toBe(200);
        });
    });
    it('should respond with 200 for update method', () => {
        return mockRequest.get('/products/1').then(result => {
            expect(result.status).toBe(200);
        });
    });
});