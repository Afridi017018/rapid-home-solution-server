const express = require('express');
const { addToCart, getCart } = require('../controllers/addToCart');
const { addCategory, getCategories } = require('../controllers/categoryController');
const { addComment, getComments, updateComment } = require('../controllers/commentController');
const { addFaq, getFaq } = require('../controllers/faqController');
const { addService, getServices, getServiceById } = require('../controllers/serviceController');
const { testPayment } = require('../controllers/testPaymentController');
const router = express.Router();
const stripe = require('stripe')("sk_test_51NxsVnLDN7M5wmwbO3C5GiLfEAtRjSv0mlSY3ST3mcZeiOGPAesqQSTi4YMHZEzfcxyitDoXlbQtEcRpss3aGZ4Q00cKFQbnkd");


router.post('/add-service', addService);
router.get('/get-all-services', getServices);
router.get('/get-service-by-id/:id', getServiceById);

router.post('/add-category', addCategory);
router.get('/get-all-categories', getCategories);

router.post('/add-faq', addFaq);
router.get('/get-faq', getFaq);

router.post('/test-payment', testPayment);

router.post('/add-to-cart',addToCart);

router.get('/get-cart/:userId', getCart);

router.post('/add-comment', addComment);
router.get('/get-comments', getComments);
router.put('/update-comment', updateComment);











router.post('/create-payment-intent', async (req, res) => {
  try {
    const {amount, currency} = req.body;
    const paymentIntent = await stripe.paymentIntents.create({
      amount ,
      currency  
    });
    // console.log(paymentIntent)
    res.status(200).json(paymentIntent.client_secret);


    // const customer = await stripe.customers.create();
    // const ephemeralKey = await stripe.ephemeralKeys.create(
    //   {customer: customer.id},
    //   {apiVersion: '2022-08-01'}
    // );
    // const paymentIntent = await stripe.paymentIntents.create({
    //   amount: amount,
    //   currency: currency,
    //   customer: customer.id,
    //   payment_method_types: ['card'],
    // });
  

    // console.log(paymentIntent)

    // res.json({
    //   paymentIntent: paymentIntent.client_secret,
    //   ephemeralKey: ephemeralKey.secret,
    //   customer: customer.id,
    // });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while creating a payment intent.' });
  }
});




router.post('/save-payment', async (req, res) => {

  try {
    const { paymentIntentId } = req.body;

    // Check if the payment intent with the given ID exists in Stripe
    const paymentIntent = await stripe.paymentIntents.retrieve(paymentIntentId);

    if (paymentIntent.status === 'succeeded') {

      console.log({ paymentId: paymentIntent });

      res.status(200).json({ message: 'Payment information saved successfully.' });
    } else {
      // Payment failed or was not completed
      res.status(400).json({ error: 'Payment not completed or failed.' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while saving payment information.' });
  }
});





module.exports = router;