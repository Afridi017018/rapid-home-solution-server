const express = require('express');
const router = express.Router();
const { createPaymentIntent, saveOrder, updateOrderStatus, getOrders, updateRating, getAllOrders, getRecentOrders } = require('../controllers/orderInfo');





router.post('/create-payment-intent', createPaymentIntent);
router.post('/save-order', saveOrder);
router.get('/get-orders/:userId', getOrders);
router.get('/get-all-orders', getAllOrders);

router.put('/update-order-status', updateOrderStatus);

router.put('/update-rating', updateRating)

router.get('/get-recent-orders', getRecentOrders);



module.exports = router;