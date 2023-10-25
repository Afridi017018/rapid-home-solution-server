const { cloudName, apiKey, apiSecret } = require('../secret');


const cloudinary = require('cloudinary').v2

cloudinary.config({
    cloud_name: cloudName,
    api_key: apiKey,
    api_secret: apiSecret,
  });



  module.exports = cloudinary;