const mongoose = require("mongoose");

const serviceSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "categories",
        required: true,
    },
    image: {
      type: Array,
      required: true,
    },
    duration: {
        type: Number,
        required: true,
      },
    
  },
  { timestamps: true }
);

const Service = mongoose.model("services", serviceSchema);

module.exports = Service;

