import mongoose from "mongoose";
import validator from "validator";

const userSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: [true, "Please provide your name!"],
    minLength: [3, "Name must contain at least 3 characters!"],
    maxLength: [20, "Name cannot exceed 20 characters!"],
  },
  email: {
    type: String,
    required: [true, "Please provide your email!"],
    unique: [true, "User already registered!"],
    validate: [validator.isEmail, "Please provide valid email!"],
  },
  phone: {
    type: String,
    required: [true, "Provide your phone number!"],
    validator: function (v) {
      return /^\d{10}$/.test(v); // Regular expression test
    },
    message: (props) => "Not a valid phone number, provide exact 10 digits!",
  },
  password: {
    type: String,
    required: [true, ""],
    minLength: [3, "Name must contain at least 3 characters!"],
    maxLength: [20, "Name cannot exceed 20 characters!"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export const User = mongoose.model("User", userSchema);
