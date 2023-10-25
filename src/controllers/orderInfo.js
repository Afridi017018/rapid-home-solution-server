const { stripePrivateKey } = require('../secret');

const stripe = require('stripe')(stripePrivateKey);

const createPaymentIntent = async (req, res) => {
    try {
        const { amount, currency } = req.body;
        const paymentIntent = await stripe.paymentIntents.create({
            amount,
            currency
        });
        //   console.log(paymentIntent)
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
}


const saveOrder = async (req, res) => {

    try {
        const { userId, serviceId, paymentIntentId } = req.body;


        const paymentIntent = await stripe.paymentIntents.retrieve(paymentIntentId);

        if (paymentIntent.status === 'succeeded') {

            console.log({ paymentId: paymentIntent.id, serviceId, userId });

            res.status(200).json({
                success: true,
                message: 'Payment information saved successfully.'
            });
        } else {

            res.status(400).json({
                success: false,
                error: 'Payment not completed or failed.'
            });
        }
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
}



module.exports = { createPaymentIntent, saveOrder }