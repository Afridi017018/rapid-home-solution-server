const Service = require("../models/serviceModel");


const addService = async (req, res) => {

    try {
        const { title, description, price, category, duration } = req.body;

        const newService = new Service({
            title,
            description,
            price,
            category,
            duration
        })

        await newService.save();

        res.json({
            success: true,
            message: "Services added successfully",
            service: newService
        });

    } catch (error) {
        res.status(401).json({
            success: false,
            message: error.message,
        });
    }

}







const getServices = async (req, res) => {
    try {

        const services = await Service.find().populate("category");

        res.json({
            success: true,
            message: "All services",
            services
        });

    } catch (error) {
        res.status(401).json({
            success: false,
            message: error.message,
        });
    }

}




const getServiceById = async (req, res) => {
    try {

        const {id} = req.params;
        const service = await Service.findById(id).populate("category");

        console.log(id)

        res.json({
            success: true,
            message: "Single service",
            service
        });

    } catch (error) {
        res.status(401).json({
            success: false,
            message: error.message,
        });
    }

}








module.exports = { addService, getServices, getServiceById };