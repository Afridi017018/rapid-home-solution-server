const express = require('express');
const router = express.Router();
const { createPaymentIntent, saveOrder, updateOrderStatus, getOrders } = require('../controllers/orderInfo');





router.post('/create-payment-intent', createPaymentIntent);
router.post('/save-order', saveOrder);
router.get('/get-orders/:userId', getOrders);

router.put('/update-order-status', updateOrderStatus);

module.exports = router;