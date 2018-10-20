const mongoose = require('mongoose');
const Donation = require('./model');

exports.get = async () => {
    const res = await Donation.find({
        active: true
    },  'title price slug');
    return res;
};

exports.getById = async(id) => {
    const res = await Donation
    .findById(id);
    return res;
};

exports.create = async(data) => {
    var donation = new Donation(data);
    await donation.save();
};