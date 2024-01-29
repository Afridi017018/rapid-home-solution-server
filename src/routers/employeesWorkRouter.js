const express = require('express');
const { addWork, getWork, updateWork, getWorkHistory } = require('../controllers/employeesWorkController');
const router = express.Router();





router.post('/add-work', addWork);

router.get('/get-work/:employeeId', getWork);

router.get('/get-work-history/:employeeId', getWorkHistory);

router.put('/update-work', updateWork);




module.exports = router;