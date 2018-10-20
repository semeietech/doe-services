const mongoose = require('mongoose');
const Reward = require('./model');

exports.create = async(data) => {
    var reward = new Reward(data);
    await reward.save();
};

