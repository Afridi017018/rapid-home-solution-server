const express = require('express');
const router = express.Router();

const upload = require('../config/multerConfig');

const { addToCart, getCart, getCartByCartId, removeCart } = require('../controllers/addToCart');
const { addCategory, getCategories } = require('../controllers/categoryController');
const { addComment, getComments, updateComment } = require('../controllers/commentController');
const { addFaq, getFaq, updateFaq, deleteFaq } = require('../controllers/faqController');
const { addService, getServices, getServiceById, updateService, deleteService, getServiceRating } = require('../controllers/serviceController');

// const { Readable } = require("stream");

// const cloudinary = require('../config/cloudinaryConfig')


router.post('/add-service', upload.single('image'), addService);
router.put('/update-service', updateService)
router.get('/get-all-services', getServices);
router.get('/get-service-by-id', getServiceById);
router.delete('/delete-service/:id', deleteService)

router.post('/add-category', addCategory);
router.get('/get-all-categories', getCategories);

router.post('/add-faq', addFaq);
router.get('/get-faq', getFaq);
router.put('/update-faq', updateFaq);
router.delete('/delete-faq/:id', deleteFaq);


router.post('/add-to-cart', addToCart);
router.get('/get-cart/:userId', getCart);
router.delete('/remove-cart/:cartId', removeCart);
router.get('/get-cart-by-cart-id/:cartId', getCartByCartId);


router.post('/add-comment', addComment);
router.get('/get-comments/:serviceId', getComments);
router.put('/update-comment', updateComment);


router.get('/get-service-rating/:serviceId', getServiceRating)




// router.post('/imageTest', upload.single('image'), async (req, res) => {

//     const imageStream = await Readable.from(req.file.buffer)

//     const imageUrl = [];

//     await new Promise((resolve, reject) => {

//         const cld_upload_stream = cloudinary.uploader.upload_stream({
//             folder: "rapid-home-solution/service-image",
//         }, (error, result) => {
//             if (result) {
//                 const { secure_url, public_id } = result;
//                 imageUrl.push({ public_id, secure_url });
//                 resolve();
//             } else {
//                 reject(error);
//             }
//         });

//         imageStream.pipe(cld_upload_stream);
//     });

//     res.send(imageUrl)
// })





// router.post('/imageTest', async(req,res)=>{

//   const deleteImage = (publicId) => {
//     cloudinary.uploader.destroy(publicId, (error, result) => {
//         if (result) {
//             console.log(`Image deleted: ${publicId}`);
//         } else {
//             console.error(`Error deleting image ${publicId}:`, error);
//         }
//     });
// };


//     deleteImage("rapid-home-solution/service-image/ufyrnmigvvbaamkubq0f");



//   res.send("deleted")
// })





// const { Readable } = require("stream");
// const upload = require('../config/multerConfig');
// const cloudinary = require('../config/cloudinaryConfig')
// router.post('/imageTest', upload.single('image'), async(req,res)=>{

//   const imageStream = await Readable.from(req.file.buffer)

//   const imageUrl = [];

//   await new Promise((resolve, reject) => {

//     const cld_upload_stream = cloudinary.uploader.upload_stream({
//         overwrite: true,
//         public_id: "rapid-home-solution/service-image/ufyrnmigvvbaamkubq0f"
//     }, (error, result) => {
//         if (result) {
//             const { secure_url, public_id } = result;
//             imageUrl.push({ public_id, secure_url });
//             resolve();
//         } else {
//             reject(error);
//         }
//     });

//     imageStream.pipe(cld_upload_stream);
// });

//   res.send(imageUrl)
// })

















module.exports = router;