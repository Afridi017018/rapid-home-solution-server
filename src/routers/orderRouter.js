const express = require('express');
const router = express.Router();
const { createPaymentIntent, saveOrder } = require('../controllers/orderInfo');





router.post('/create-payment-intent', createPaymentIntent);


router.post('/save-order', saveOrder);

module.exports = router;