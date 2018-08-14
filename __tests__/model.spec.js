const httpRequester = require('supertest');
const mongoose = require('mongoose');
const server = require('../bin/server');
const parse = require('../__tests__/parse');
const requester = httpRequester.agent(server);

describe('Model initial test', () => {
    beforeAll( async (done) => {
        await mongoose.connection.db.dropCollection('Model');
        done()
    });
    afterAll( async (done) => {
        await mongoose.connection.db.dropCollection('Model');
        done()
    });

    it('initial model', async (done) => {
        expect.assertions(1);
        const result = await requester.post('/model')
        .type('application/json')
        .send({
            
        })
    })
})