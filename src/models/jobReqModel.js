const mongoose = require('mongoose');

const jobReqSchema = new mongoose.Schema({

    applicant: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
        required: true

    },

    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "categories",
        required: true

    },
    status: {
        type: String,
        default: "pending"
    },
    cv: {
        type: Array,
        required: true,

    }

}, { timestamps: true })

const JobReq = mongoose.model('jobReq', jobReqSchema);

module.exports = JobReq;