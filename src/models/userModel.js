const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim:true,         
    },
    email: {
      type: String,
      required: true,
      trim : true,
    },
    phone: {
        type: String,
        default: "",
      },
    password: {
        type: String,
        required: true,
        set: (v) => bcrypt.hashSync(v, bcrypt.genSaltSync(10))
    },
    role: {
      type: String,
      default: "user",
    },
    status: {
      type: String,
      default: "active",
    },
    profilePicture: {
      type: String,
      default: "",
      trim : true,
    },
    region: {
      type: String,
      default: "",
      trim : true,
    },
    city: {
      type: String,
      default: "",
      trim : true,
    },
    area: {
      type: String,
      default: "",
      trim : true,
    },
    address: {
      type: String,
      default: "",
      trim : true,
    },
    country: {
      type: String,
      default: "Bangladesh",
    }
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("users", userSchema);

module.exports = User;