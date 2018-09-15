const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    payment: {
        type: String,
        required: true,
    },
    user: {
        type: String,
        required: true,
    },
    reward: {
        type: Boolean,
        required: true,
    },
    createdAt: {
        type: String,
        required: true,
    }
});

module.exports = mongoose.model('Donation', schema);