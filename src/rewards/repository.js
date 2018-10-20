const mongoose = require('mongoose');
const Reward = require('./model');

exports.create = async(data) => {
    var reward = new Reward(data);
    await reward.save();
};

exports.get = async () => {
    return Reward.find();
};

exports.update = async(id, data) => {
    await Reward
        .findByIdAndUpdate(id, {
            $set: data
        })
};