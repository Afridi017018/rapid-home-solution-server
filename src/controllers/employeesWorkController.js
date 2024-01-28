const Category = require("../models/categoryModel");
const EmployeesWork = require("../models/employeesWorkModel");
const OrderInfo = require("../models/orderInfoModel");


const addWork = async (req, res) => {

    try {

        const { employeeId, orderId, status } = req.body;

        const data = await OrderInfo.findOne({ _id: orderId });

        if (!data) {
            return res.json({
                success: false,
                message: "Invalid Order ID",
            });
        }

        const data2 = await EmployeesWork.findOne({ orderId: orderId });

        if (data2) {
            return res.json({
                success: false,
                message: "Already In Progress",
 
            });
        }

        const info = await OrderInfo.findById({ _id: orderId }).populate("userId").populate("serviceId");

        const category = await Category.findById({ _id: info.serviceId.category });

        const newWork = new EmployeesWork({
            employeeId,
            orderId,
            category: category.name,
            userName: info.userId.name,
            userPhone: info.userId.phone,
            amount: info.serviceId.price,
            userAddress: `${info.userId.address}, ${info.userId.area}, ${info.userId.city}, ${info.userId.region}, ${info.userId.country}`,
            status,


        })

        await newWork.save();

        res.json({
            success: true,
            message: "Work added successfully",
            work: newWork
        });

    } catch (error) {
        res.status(401).json({
            success: false,
            message: error.message,
        });
    }

}









module.exports = { addWork };