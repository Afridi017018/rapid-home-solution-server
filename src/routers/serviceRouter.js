const express = require('express');
const { addService, addCategory, getServices, getCategories } = require('../controllers/serviceController');
const router = express.Router();



router.post('/add-service', addService);
router.post('/add-category', addCategory);
router.get('/get-all-services', getServices);
router.get('/get-all-categories', getCategories);



module.exports = router;