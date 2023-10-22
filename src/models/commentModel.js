const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
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
    comment: {
        type: String,
        required: true
    },
    reply: {
        type: String,
        default: ""
    },
}, { timestamps: true })

const Comment = mongoose.model('comments', commentSchema);

module.exports = Comment;