const express = require('express');
const router = express.Router();
const { createPaymentIntent, saveOrder, updateOrderStatus, getOrders, updateRating, getAllOrders, getRecentOrders } = require('../controllers/orderInfo');
const authMiddleware = require('../middlewares/authMiddleWare');





router.post('/create-payment-intent',  authMiddleware, createPaymentIntent);
router.post('/save-order', authMiddleware, saveOrder);
router.get('/get-orders/:userId', authMiddleware, getOrders);
router.get('/get-all-orders', authMiddleware, getAllOrders);

router.put('/update-order-status', authMiddleware, updateOrderStatus);

router.put('/update-rating', authMiddleware, updateRating)

router.get('/get-recent-orders', authMiddleware, getRecentOrders);



module.exports = router;