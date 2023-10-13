const stripe = require("stripe")("sk_test_51NxsVnLDN7M5wmwbO3C5GiLfEAtRjSv0mlSY3ST3mcZeiOGPAesqQSTi4YMHZEzfcxyitDoXlbQtEcRpss3aGZ4Q00cKFQbnkd");

const testPayment = async (req,res)=>{

    const {services} = req.body;


    const lineItems = services.map((product)=>({
        price_data:{
            currency:"bdt",
            product_data:{
                name:"Hi",
                // images:[product.imgdata]
            },
            unit_amount:500 * 100,
        },
        quantity:2
    }));

    const session = await stripe.checkout.sessions.create({
        payment_method_types:["card"],
        line_items:lineItems,
        mode:"payment",
        success_url:"http://127.0.0.1:5173/success",
        cancel_url:"http://127.0.0.1:5173/cancel",
    });

    console.log({id:session.id})
    res.json({id:session.id})

}


module.exports = {testPayment}