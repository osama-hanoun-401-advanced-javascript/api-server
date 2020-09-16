'use strict';

require('@code-fellows/supergoose');

const product = require('../lib/models/products/products-model');

describe('product Model', () => {
    it('it can create()', async () => {
        const productObj = { name: 'laptop', display_name: 'Laptop', description: 'Laptop for gaming' };
        const result = await product.create(productObj);
        Object.keys(productObj).forEach(key => {
            expect(result[key]).toEqual(productObj[key]);
        });
    });

    it('it can get()', async () => {
        const productObj = { name: 'laptop', display_name: 'Laptop', description: 'Laptop for gaming' };
        const result = await product.create(productObj);
        const records = await product.get(result._id);
        Object.keys(productObj).forEach(key => {
            expect(records[0][key]).toEqual(productObj[key]);
        });
    });

    it('it can update()', async () => {
        const productObj = { name: 'laptop', display_name: 'Laptop', description: 'Laptop for gaming' };
        const result = await product.create(productObj);
        const updatedProductObj = { name: 'pc', display_name: 'PC', description: 'PC for gaming' };
        await product.update(result._id,updatedProductObj);
        const records = await product.get(result._id);
        Object.keys(productObj).forEach(key => {
            expect(records[0][key]).toEqual(updatedProductObj[key]);
        });
    });

    it('it can delete()', async () => {
        const productObj = { name: 'laptop', display_name: 'Laptop', description: 'Laptop for gaming' };
        const result = await product.create(productObj);
        const records = await product.delete(result._id);
        Object.keys(productObj).forEach(key => {
            expect(records[key]).toEqual(productObj[key]);
        });
        expect(await product.delete(result._id)).toEqual(null);
    });
});