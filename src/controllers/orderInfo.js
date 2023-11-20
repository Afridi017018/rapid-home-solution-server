const OrderInfo = require('../models/orderInfoModel');
const { stripePrivateKey } = require('../secret');

const stripe = require('stripe')(stripePrivateKey);

const createPaymentIntent = async (req, res) => {
    try {
        const { amount, currency } = req.body;

        const paymentIntent = await stripe.paymentIntents.create({
            amount,
            currency
        });

        // console.log(paymentIntent.client_secret)

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
        const { userId, serviceId, paymentIntentId, amount } = req.body;


        const paymentIntent = await stripe.paymentIntents.retrieve(paymentIntentId);

        if (paymentIntent.status === 'succeeded') {

            const newOrder = new OrderInfo({
                userId,
                serviceId,
                paymentId: paymentIntent.id,
                amount
            })

            const saveOrder = await newOrder.save();
            // const orderId = saveOrder._id.toString();



            res.status(200).json({
                success: true,
                message: 'Payment information saved successfully.',
                saveOrder
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
            message: error.message,
        });
    }
}



const getOrders = async (req, res) => {

    try {

        const { userId } = req.params;
        const orders = await OrderInfo.find({ userId }).populate('serviceId').sort({ createdAt: -1 });


        res.json({
            success: true,
            message: "All orders by user id",
            orders
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }

}




const getAllOrders = async (req, res) => {

    try {

        const orders = await OrderInfo.find({}).populate('serviceId').sort({ createdAt: -1 });

        res.json({
            success: true,
            message: "All orders",
            orders
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }

}





const updateOrderStatus = async (req, res) => {

    try {
        const { orderId, status } = req.body;

        if (status === 'serviced') {
            await OrderInfo.findByIdAndUpdate({ _id: orderId }, { status, rate: 0 });

            const data = await OrderInfo.findById({ _id: orderId });

            await OrderInfo.findByIdAndUpdate({ _id: orderId }, { servicedAt: data.updatedAt });
        }

        else {
            await OrderInfo.findByIdAndUpdate({ _id: orderId }, { status, rate: -1, servicedAt: null });
        }



        res.json({
            success: true,
            message: "Order status updated",

        });


    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }

}





const updateRating = async (req, res) => {

    try {
        const { orderId, rate } = req.body;
        console.log(orderId)

        const updateData = await OrderInfo.findByIdAndUpdate({ _id: orderId }, { rate: rate });


        res.json({
            success: true,
            message: "Rate updated",

        });


    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }

}









module.exports = { createPaymentIntent, saveOrder, getOrders, updateOrderStatus, updateRating, getAllOrders }