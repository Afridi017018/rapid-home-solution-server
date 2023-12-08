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
        res.status(401).json({
            success: false,
            message: error.message,
        });
    }

}


const getFaq = async (req, res) => {

    try {

        const faqs = await Faq.find();

        res.json({
            success: true,
            message: "All Faq!",
            faqs
        
        });

    } catch (error) {
        res.status(401).json({
            success: false,
            message: error.message,
        });
    }

}

const updateFaq = async (req, res) => {

    try {

        const { id, qs, ans } = req.body;

        const update = await Faq.findByIdAndUpdate({ _id: id }, { qs, ans });

        res.json({
            success: true,
            message: "FAQ updated successfully",
            faq: update
        });

    } catch (error) {
        res.status(401).json({
            success: false,
            message: error.message,
        });
    }

}



        

const deleteFaq = async (req, res) => {
    try {

        const { id } = req.params;

        const deletedData = await Faq.findByIdAndDelete({ _id: id });

        res.json({
            success: true,
            message: "FAQ deleted!",
            faq: deletedData
        });

    } catch (error) {
        res.status(401).json({
            success: false,
            message: error.message,
        });
    }
}







module.exports = { addFaq, getFaq, updateFaq, deleteFaq };