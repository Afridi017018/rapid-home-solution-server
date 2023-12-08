const Employee = require("../models/employeeModel");

const addEmployee = async (req, res) => {

    try {

        const { name, address, phone } = req.body;

        console.log(req.body)
        const newEmployee = new Employee({
            name,
            address,
            phone

        })

        await newEmployee.save();

        console.log(newEmployee)
        res.json({
            success: true,
            message: "Employees added successfully",
            employee: newEmployee
        });

    } catch (error) {
        res.status(401).json({
            success: false,
            message: error.message,
        });
    }

}





const updateEmployee = async (req, res) => {

    try {

        const { id,name, address, phone } = req.body

        const update = await Employee.findByIdAndUpdate({ _id: id }, { name, address, phone });


        res.json({
            success: true,
            message: "Employees updated successfully",
            employee: update
        });

    } catch (error) {
        res.status(401).json({
            success: false,
            message: error.message,
        });
    }

}





const getEmployees = async (req, res) => {
    try {

        const employees = await Employee.find().sort({ createdAt: -1 });

        res.json({
            success: true,
            message: "All employees",
            employees
        });

    } catch (error) {
        res.status(401).json({
            success: false,
            message: error.message,
        });
    }

}




const getEmployeeById = async (req, res) => {
    try {

        const employee = await Employee.findById(id);

        // console.log(id)

        res.json({
            success: true,
            message: "Single employee",
            employee
        });

    } catch (error) {
        res.status(401).json({
            success: false,
            message: error.message,
        });
    }

}




const deleteEmployee = async (req, res) => {

    try {

        const { id } = req.params

        const deletedData = await Employee.findByIdAndDelete({ _id: id })

             res.json({
            success: true,
            message: "Employees deleted successfully",
            employee: deletedData
        });

    } catch (error) {
        res.status(401).json({
            success: false,
            message: error.message,
        });
    }

}






module.exports = { addEmployee, updateEmployee, getEmployees, getEmployeeById, deleteEmployee };