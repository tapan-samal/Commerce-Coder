import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { User } from "../models/userSchema.js";
const router = express.Router();

router.post("/signup", async (req, res) => {
  const { userName, email, password } = req.body;
  const user = await User.find({ email });
  if (user) {
    return res.json({ message: "User already exists!" });
  }
  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = new User({
    userName,
    email,
    password: hashedPassword,
  });
  await newUser.save();
  return res.json({ status: true, message: "Sign up successfully!" });
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    res.json({ message: "User is not registered!" });
  }
  const validPassword = await bcrypt.compare(password, user.password);
  if (!validPassword) {
    return res.json({ message: "Password is incorrect!" });
  }
  const token = jwt.sign({ userName: user.userName }, process.env.KEY, {
    expiresIn: "1h",
  });
  res.cookie("token:", token, { httpOnly: true, maxAge: 360000 });
  return res.json({ status: true, message: "Login successfully!" });
});

export { router as UserRouter };
