const mongoose = require('mongoose');


const faqSchema = new mongoose.Schema({

    qs: {
        type: String,
        required: true
    },

    ans: {
        type: String,
        required: true
    }


})


const Faq = mongoose.model("faqs", faqSchema);

module.exports = Faq;