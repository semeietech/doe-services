const httpRequester = require('supertest');
const mongoose = require('mongoose');
const server = require('../bin/server');
const requester = httpRequester.agent(server);
const parse = require('../__tests__/parse');

describe("created and update rewards", () => {
    it("created rewards", async (done) => {
        expect.assertions(2);
        const result = await requester.post("/rewards")
        .type('application/json')
        .send({
            "donationId": "fon",
            "campaignId": "foads",
            "createdAt": new Date().toISOString()
        });
        expect(result).toHaveProperty("status", 201);
        expect(result.text).toMatch("Reward created");
        done();
    })
});