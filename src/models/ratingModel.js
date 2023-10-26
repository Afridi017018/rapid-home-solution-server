const mongoose = require('mongoose');

const ratingSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
        required: true

    },
    serviceId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "services",
        required: true

    },
    orderId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "orders",
        required: true
    },
    rate: {
        type: Number,
        default: 0
    },
    

}, )

const Rating = mongoose.model('rating', ratingSchema);

module.exports = Rating;