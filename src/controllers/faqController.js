const Faq = require("../models/faqModel");


const addFaq = async (req, res) => {

    try {

        const { qs, ans } = req.body;

        const newFaq = new Faq({
            qs,
            ans
        })

        const faq = await newFaq.save();

        res.json({
            success: true,
            message: "FAQ added!",
            faq
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }

}


const getFaq = async (req, res) => {

    try {

        const faq = await Faq.find();

        res.json({
            success: true,
            message: "All Faq!",
            faq
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }

}



module.exports = { addFaq, getFaq }