const mongoose = require('mongoose');
const Donation = mongoose.model('Donation');

exports.get = async () => {
    const res = await Donation.find({
        active: true
    },  'title price slug');
    return res;
};

exports.getBySlug = async(slug) => {
    const res = await Donation
    .findOne({
        slug: slug,
        active: true
    },  'title description price slug tags');
    return res;
};

exports.getById = async(id) => {
    const res = await Donation
    .findById(id);
    return res;
};

exports.getByTag = async(tag) => {
    const res = Donation.find({
        tags: tag,
        active: true
    },  'title description price slug tags');
    return res;
};

exports.create = async(data) => {
    var donation = new Donation(data);
    await donation.save();
};

exports.update = async(id, data) => {
    await Donation
        .findByIdAndUpdate(id, {
            $set: {
                title: data.title,
                description: data.description,
                price: data.price,
                slug: data.slug,
            }
        })
};

exports.delete = async(id) => {
    await Donation
        .findByIdAndRemove(id);
};