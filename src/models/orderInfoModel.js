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
    status: {
        type: String,
        default: "pending"
    },
    amount: {
        type: String,
        required: true
    }

}, { timestamps: true })

const OrderInfo = mongoose.model('orders', orderInfoSchema);

module.exports = OrderInfo;