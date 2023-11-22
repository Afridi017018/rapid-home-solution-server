const mongoose = require('mongoose');

const orderInfoSchema = new mongoose.Schema({
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
    paymentId: {
        type: String,
        required: true
    },
    quick: {
        type: Boolean,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    amount: {
        type: String,
        required: true
    },
    servicedAt: {
        type: Date,
        default: null
    },
    rate: {
        type: Number,
        default: -1
    },

}, { timestamps: true })

const OrderInfo = mongoose.model('orders', orderInfoSchema);

module.exports = OrderInfo;