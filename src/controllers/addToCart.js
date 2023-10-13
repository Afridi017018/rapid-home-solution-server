const Cart = require("../models/cartModel");

const addToCart = async(req, res) => {
    try {

        const {userId, serviceId} = req.body;


        const newCart = new Cart({
            userId,
            serviceId
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



const getCart = async(req,res)=>{
        
    try {

        const {userId} = req.params;


       const cartData = await Cart.find({userId});
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




module.exports = { addToCart, getCart }