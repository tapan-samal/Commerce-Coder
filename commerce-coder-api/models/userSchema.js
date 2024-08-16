import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Please provide your name!"],
    minLength: [3, "Name must contain at least 3 characters!"],
    maxLength: [20, "Name cannot exceed 20 characters!"],
    unique: true, 
  },
  email: {
    type: String,
    required: [true, "Please provide your email!"],
    unique: true,
    validate: [validator.isEmail, "Please provide a valid email!"],
  },  
  phone: {
    type: String,
    required: [true, "Please provide your phone number!"],
    match: [/^\d{10}$/, "Phone number must be exactly 10 digits!"],
  },
  password: {
    type: String,
    required: [true, "Please provide your password!"],
    minLength: [6, "Password must contain at least 6 characters!"],
    maxLength: [12, "Password cannot exceed 12 characters!"],
    select: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Hashing password before saving
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next();
  }
  try {
    this.password = await bcrypt.hash(this.password, 10);
    next();
  } catch (error) {
    next(error);
  }
});

// Compare password method
userSchema.methods.comparePassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

// Generate JWT token
userSchema.methods.getJwtToken = function () {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET_KEY, {
    expiresIn: process.env.JWT_EXPIRE,
  });
};

export const User = mongoose.model("User", userSchema);

