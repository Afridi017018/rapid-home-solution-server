const express = require('express');
const { userRegister, userLogin, updateUser } = require('../controllers/userControllers');
const router = express.Router();



router.post('/register', userRegister);
router.post('/login', userLogin);
router.put('/update-user', updateUser);


module.exports = router;