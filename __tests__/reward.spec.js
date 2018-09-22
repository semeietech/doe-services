const httpRequester = require('supertest');
const mongoose = require('mongoose');
const server = require('../bin/server');
const requester = httpRequester.agent(server);
const parse = require('../__tests__/parse');
const calculateNumberOfRewards = require('../src/rewards/controller').calculateNumberOfRewards;

describe("Rewards", () => {
    it("calculateNumberOfRewards - give 25 should return 1", () => {
        expect.assertions(1);
        const result = calculateNumberOfRewards(25)
        expect(result).toBe(1)
    });

    it("calculateNumberOfRewards - give 24 should return 0", () => {
        expect.assertions(1);
        const result = calculateNumberOfRewards(24)
        expect(result).toBe(0)
    });

    it("calculateNumberOfRewards - give 50 should return 3", () => {
        expect.assertions(1);
        const result = calculateNumberOfRewards(50)
        expect(result).toBe(3)
    });

    it("calculateNumberOfRewards - give 80 should return 4", () => {
        expect.assertions(1);
        const result = calculateNumberOfRewards(80)
        expect(result).toBe(4)
    });
});