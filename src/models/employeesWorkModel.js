const mongoose = require('mongoose');

const employeesWorkSchema = new mongoose.Schema({
    employeeId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
        required: true

    },
    orderId: {
        type: String,
        required: true

    },
    userName: {
        type: String,
        required: true

    },
    userId: {
        type: String,
        required: true

    },
    userPhone: {
        type: String,
        required: true

    },
    userAddress: {
        type: String,
        required: true

    },
    amount: {
        type: Number,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        required: true,
    },
}, { timestamps: true })

const EmployeesWork = mongoose.model('employeesWork', employeesWorkSchema);

module.exports = EmployeesWork;