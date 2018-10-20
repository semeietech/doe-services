const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    donationId: {
        type: String,
        required: true,
    },
    fortuneNumber: {
        type: String,
    },
    campaignId: {
        type: String,
        required: true,
    },
    createdAt: {
        type: String,
        required: true,
    },
    updateAt: {
        type: String,
    },
});

module.exports = mongoose.model('reward', schema);