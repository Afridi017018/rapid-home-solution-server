const express = require('express');
const router = express.Router();

const { addEmployee, getEmployees, getEmployeeById, updateEmployee, deleteEmployee } = require('../controllers/employeeController');



router.post('/add-employee', addEmployee);
router.put('/update-employee', updateEmployee)
router.get('/get-all-employees', getEmployees);
router.get('/get-employee-by-id/:id', getEmployeeById);
router.delete('/delete-employee/:id', deleteEmployee)



module.exports = router;