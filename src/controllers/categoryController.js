const Category = require("../models/categoryModel");

const addCategory = async (req, res) => {
    try {

        const {name} = req.body;

        const newCategory = new Category({
            name
        })

        await newCategory.save()

        res.json({
            success: true,
            message: "Services added successfully",
            category: newCategory
        });

    } catch (error) {
        res.status(401).json({
            success: false,
            message: error.message,
        });
    }

}




const getCategories = async (req, res) => {
    try {


        const categories = await Category.find();

        res.json({
            success: true,
            message: "All categories",
            categories
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }

}


module.exports = {addCategory, getCategories };