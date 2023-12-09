const express = require('express');
const upload = require('../config/multerConfig');
const { userRegister, userLogin, updateUser, getUser, getAllUsers, addJobReq, getAllApplications, updateApplicationStatus, getApplicationsByUser, updateRole } = require('../controllers/userControllers');
const authMiddleware = require('../middlewares/authMiddleWare');
const router = express.Router();



router.post('/register', userRegister);
router.post('/login', userLogin);
router.get('/get-user', authMiddleware, getUser);
router.get('/get-all-users', authMiddleware, getAllUsers);
// router.get('/get-user/:userId', getUser);
router.put('/update-user',authMiddleware, updateUser);

router.post('/add-job-req', authMiddleware, upload.single('cv'), addJobReq)
router.get('/get-all-applications', authMiddleware, getAllApplications)
router.get('/get-applications-by-user/:id',authMiddleware, getApplicationsByUser)
router.put('/update-application-status', authMiddleware, updateApplicationStatus)

router.put('/update-role', authMiddleware, updateRole);


module.exports = router;