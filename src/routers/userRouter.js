const express = require('express');
const upload = require('../config/multerConfig');
const { userRegister, userLogin, updateUser, getUser, getAllUsers, addJobReq, getAllApplications, updateApplicationStatus, getApplicationsByUser } = require('../controllers/userControllers');
const authMiddleware = require('../middlewares/authMiddleWare');
const router = express.Router();



router.post('/register', userRegister);
router.post('/login', userLogin);
router.get('/get-user', authMiddleware, getUser);
router.get('/get-all-users', getAllUsers);
// router.get('/get-user/:userId', getUser);
router.put('/update-user', updateUser);

router.post('/add-job-req', upload.single('cv'), addJobReq)
router.get('/get-all-applications', getAllApplications)
router.get('/get-applications-by-user/:id', getApplicationsByUser)
router.put('/update-application-status', updateApplicationStatus)


module.exports = router;