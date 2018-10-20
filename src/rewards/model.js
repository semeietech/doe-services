const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    donationId: {
        type: String,
        required: true,
    },
    fortuneNumber: {
        type: String,
        required: true,
    },
    campaignId: {
        type: Boolean,
        required: true,
    },
    createdAt: {
        type: String,
        required: true,
    },
    updateAt: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model('Reward', schema);