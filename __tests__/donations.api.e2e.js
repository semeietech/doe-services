const httpRequester = require('supertest');
const mongoose = require('mongoose');
const server = require('../bin/server');
const requester = httpRequester.agent(server);
const parse = require('../__tests__/parse');

describe('Donations api end2end tests', () => {
    /* beforeAll( async (done) => {
        await mongoose.connection.db.dropCollection('Donation');
        done()
    }); */
    /* afterAll( async (done) => {
        await mongoose.connection.db.dropCollection('Donation');
        done()
    }); */

    it('POST with valide data on "/donations" should create a new donation on database ', async (done) => {
        expect.assertions(2);
        const result = await requester.post('/donations')
        .type('application/json')
        .send({
            "payment": "Let go",
            "user": "asdasd",
            "reward": true,
            "createdAt": new Date().toISOString()
        });
        expect(result).toHaveProperty('status', 201);
        expect(result.text).toMatch('Donation registred');
        done();
    });
});
