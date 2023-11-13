const express = require('express');
const { userRegister, userLogin, updateUser, getUser } = require('../controllers/userControllers');
const authMiddleware = require('../middlewares/authMiddleWare');
const router = express.Router();



router.post('/register', userRegister);
router.post('/login', userLogin);
router.get('/get-user', authMiddleware, getUser);
// router.get('/get-user/:userId', getUser);
router.put('/update-user', updateUser);


module.exports = router;