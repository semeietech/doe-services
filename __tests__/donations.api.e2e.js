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
            "title":"Teclado",
            "description": "Teclado mecanico",
            "slug": "teclado-mecanico",
            "price": "200",
            "tags": ["Teclado", "gamer", "informatica"],
        });
        expect(result).toHaveProperty('status', 201);
        expect(result.text).toMatch('Produto cadastrado com sucesso!');
        done();
    });
});
