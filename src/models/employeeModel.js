const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    phone: {
      type: Number,
      required: true,
    },
    
  },
  { timestamps: true }
);

const Employee = mongoose.model("employees", employeeSchema);

module.exports = Employee;