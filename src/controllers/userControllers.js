const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');
const User = require("../models/userModel");
const { jwtSecret } = require("../secret");



const userRegister = async (req, res) => {

    try {

        const { name, email, password, confirmPassword } = req.body;

        if (password !== confirmPassword) {
            throw new Error("Confirm password did not match!");
        }

        const user = await User.findOne({ email: email });
        if (user) {
            throw new Error("User already exists");
        }


        const newUser = new User({
            name,
            email,
            password
        });

        await newUser.save();

        res.json({

            success: true,
            message: "User created successfully",
            user: newUser.email
        });

    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }

}




const userLogin = async (req, res) => {

    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email: email });
        if (!user) {
            throw new Error("User not found");
        }


        if (user.status !== "active") {
            throw new Error("The user account is blocked , please contact admin");
        }


        const isValidPassword = await bcrypt.compare(password, user.password);
        if (!isValidPassword) {
            throw new Error("Invalid password");
        }

        const token = jwt.sign({ userId: user._id, email: user.email }, jwtSecret, {
            expiresIn: "30d",
        });


        res.json({
            success: true,
            message: "User logged in successfully",
            token,
        });

    } catch (error) {
        res.status(401).json({
            success: false,
            message: error.message,
        });
    }

}




const updateUser = async (req, res) => {
    try {

        const { userId, name, phone, region, city, area, address } = req.body;

        const updateData = await User.updateOne({ _id: userId }, { name, phone, region, city, area, address })

        if (updateData.modifiedCount === 0) {
            return res.status(404).json({
                success: false,
                message: "User not found or no changes were made.",
            });
        }

        res.json({
            success: true,
            message: "User updated successfully",
            updateData,
        });
    } catch (error) {
        res.status(401).json({
            success: false,
            message: error.message,
        });
    }
}


const getUserData = async (req, res) => {
    try {

        const { userId } = req.params;

        const userData = await User.find({ _id: userId },{ password: 0 })

        
        res.json({
            success: true,
            message: "User's Information",
            userData,
        });
    } catch (error) {
        res.status(401).json({
            success: false,
            message: error.message,
        });
    }
}

const getUser = async (req, res) => {
    try {

        const { userId } = req;


         const userData = await User.find({ _id: userId },{ password: 0 })

        
        res.json({
            success: true,
            message: "User's Information",
            userData
        });
    } catch (error) {
        res.status(401).json({
            success: false,
            message: error.message,
        });
    }
}


module.exports = { userRegister, userLogin, updateUser, getUserData, getUser };