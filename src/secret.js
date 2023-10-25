require('dotenv').config();

const port = process.env.PORT || 5000;
const mongoUrl = process.env.MONGO_URL;
const jwtSecret = process.env.JWT_SECRET;
const cloudName = process.env.CLOUD_NAME;
const apiKey = process.env.API_KEY;
const apiSecret = process.env.API_SECRET;
const stripePrivateKey = process.env.STRIPE_PRIVATE_KEY;


module.exports = {port, mongoUrl, jwtSecret, cloudName, apiKey, apiSecret, stripePrivateKey};