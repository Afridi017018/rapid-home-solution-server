const express = require('express');
const { addCategory, getCategories } = require('../controllers/categoryController');
const { addFaq, getFaq } = require('../controllers/faqController');
const { addService, getServices, getServiceById } = require('../controllers/serviceController');
const router = express.Router();



router.post('/add-service', addService);
router.get('/get-all-services', getServices);
router.get('/get-service-by-id/:id', getServiceById);
router.get('/get-service-by-id/:id', getServiceById);

router.post('/add-category', addCategory);
router.get('/get-all-categories', getCategories);

router.post('/add-faq', addFaq);
router.get('/get-faq', getFaq);


module.exports = router;