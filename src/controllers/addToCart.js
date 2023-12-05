const Cart = require("../models/cartModel");

const addToCart = async (req, res) => {
    try {

        const { userId, serviceId, quick } = req.body;

        const newCart = new Cart({
            userId,
            serviceId,
            quick
        })


        await newCart.save();

        res.json({
            success: true,
            message: "Added to cart",
            newCart
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
}


const removeCart = async (req, res) => {
    try {

        const { cartId } = req.params;

        const data = await Cart.findByIdAndDelete({ _id: cartId })

        res.json({
            success: true,
            message: "Successfully removed !",
            data
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
}



const getCart = async (req, res) => {

    try {

        const { userId } = req.params;


        const cartData = await Cart.find({ userId }).populate("serviceId").sort({ createdAt: -1 });
        //    console.log(cartData)



        res.json({
            success: true,
            message: "User's cart information",
            cartData
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
}



const getCartByCartId = async (req, res) => {

    try {

        const { cartId } = req.params;


        const cartData = await Cart.find({ _id: cartId }).populate("serviceId").sort({ createdAt: -1 });
        //    console.log(cartData)



        res.json({
            success: true,
            message: "Single cart information",
            cartData
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
}



module.exports = { addToCart, getCart, getCartByCartId, removeCart }