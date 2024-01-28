const express = require('express');
const { addWork } = require('../controllers/employeesWorkController');
const router = express.Router();





router.post('/add-work', addWork);




module.exports = router;