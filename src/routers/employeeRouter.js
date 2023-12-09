const express = require('express');
const router = express.Router();

const { addEmployee, getEmployees, getEmployeeById, updateEmployee, deleteEmployee } = require('../controllers/employeeController');
const authMiddleware = require('../middlewares/authMiddleWare');



router.post('/add-employee', authMiddleware, addEmployee);
router.put('/update-employee', authMiddleware, updateEmployee)
router.get('/get-all-employees', authMiddleware, getEmployees);
router.get('/get-employee-by-id/:id', authMiddleware, getEmployeeById);
router.delete('/delete-employee/:id', authMiddleware, deleteEmployee)



module.exports = router;