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

    it('it get the reward', async (done) => {
        expect.assertions(3);
        const rewards = await requester.get('/rewards')
        expect(rewards).toHaveProperty('status', 200);
        expect(rewards.text).toMatch('campaignId');
        const data = parse(rewards.text);
        expect(data).not.toHaveLength(0);
        done();
    });

    it("Updated reward", async (done) => {
        expect.assertions(5);
        const reward = await requester.get('/rewards')
        expect(reward).toHaveProperty('status', 200);
        expect(reward.text).toMatch('foads');
        const data = parse(reward.text);
        expect(data).not.toHaveLength(0);
        const id = data[1]._id;

        const result = await requester.put('/rewards/' + id)
        .type('application/json')
         .send({
            "donationId": "let go",
            "campaignId": "eoq",      
         });
        expect(result).toHaveProperty('status', 200);
        expect(result.text).toMatch('Reward updated');
        done();   
     });
});