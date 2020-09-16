const { server } = require('../lib/server');

const supergoose = require('@code-fellows/supergoose');
const mockRequest = supergoose(server);

describe('API', () => {
    it('can post() a product item', async () => {
        const productObj = { name: 'laptop', display_name: 'Laptop', description: 'Laptop for gaming' };
        const data = await mockRequest.post('/api/v1/products').send(productObj);
        const record = data.body;
        Object.keys(productObj).forEach(key => {
            expect(record[key]).toEqual(productObj[key]);
        });
    });

    it('can get() a product item', async () => {
        const productObj = { name: 'laptop', display_name: 'Laptop', description: 'Laptop for gaming' };
        const data = await mockRequest.post('/api/v1/products').send(productObj);
        const record = data.body;
        const productItemResponse = await mockRequest.get(`/api/v1/products/${record._id}`);
        const productItem = productItemResponse.body.results[0];
        Object.keys(productObj).forEach(key => {
            expect(productItem[key]).toEqual(productObj[key]);
        });

    });
    it('can put() a product item', async () => {
        const productObj = { name: 'laptop', display_name: 'Laptop', description: 'Laptop for gaming' };
        const data = await mockRequest.post('/api/v1/products').send(productObj);
        const postRecord = data.body;
        const updatedProductObj = { name: 'pc', display_name: 'PC', description: 'PC for gaming' };
        await (await mockRequest.put(`/api/v1/products/${postRecord._id}`).send(updatedProductObj)).setEncoding();
        const productItemResponse = await mockRequest.get(`/api/v1/products/${postRecord._id}`);
        const productItem = productItemResponse.body.results[0];
        Object.keys(productObj).forEach(key => {
            expect(productItem[key]).toEqual(updatedProductObj[key]);
        });
    });
    it('can delete() a product item', async () => {
        const productObj = { name: 'laptop', display_name: 'Laptop', description: 'Laptop for gaming' };
        const data = await mockRequest.post('/api/v1/products').send(productObj);
        const postRecord = data.body;
        let productItemResponse = await mockRequest.delete(`/api/v1/products/${postRecord._id}`);
        let productItem = productItemResponse.body;
        Object.keys(productObj).forEach(key => {
            expect(productItem[key]).toEqual(productObj[key]);
        });
         productItemResponse = await mockRequest.delete(`/api/v1/products/${postRecord._id}`);;
            expect(productItemResponse.body).toEqual(null);

    });

});

