const Service = require("../models/serviceModel");
const cloudinary = require('../config/cloudinaryConfig')
const { Readable } = require("stream");

const addService = async (req, res) => {

    try {

        const imageStream = await Readable.from(req.file.buffer)

        const imageUrl = [];
      
        await new Promise((resolve, reject) => {
          
          const cld_upload_stream = cloudinary.uploader.upload_stream({
              folder: "rapid-home-solution/service-image",
          }, (error, result) => {
              if (result) {
                  const { secure_url, public_id } = result;
                  imageUrl.push({ public_id, secure_url });
                  resolve();
              } else {
                  reject(error);
              }
          });
      
          imageStream.pipe(cld_upload_stream);
      });
      
      console.log(imageUrl)



        const { title, description, price, category, duration } = req.body;

console.log(req.body)
        const newService = new Service({
            title,
            description,
            price,
            category,
            duration,
            image: imageUrl
    
        })

        await newService.save();
 
console.log(newService)
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

        const services = await Service.find().populate("category").sort({createdAt: -1});

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

        // console.log(id)

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