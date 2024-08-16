import { catchAsyncError } from "../middlewares/catchAsyncError.js";
import ErrorHandler from "../middlewares/errorHandler.js";
import { User } from "../models/userSchema.js";
import { sendToken } from "../utils/jwtToken.js";

//User Register
export const signup = catchAsyncError(async (req, res, next) => {
  const { username, email, phone, password } = req.body;

  // Check if all required fields are provided
  if (!username || !email || !phone || !password) {
    return next(new ErrorHandler("Please fill all the input fields!", 400));
  }

  // Check if user already exists
  let user = await User.findOne({ email });
  if (user) {
    return next(new ErrorHandler("User already exists!", 400));
  }

  // Create new user
  user = await User.create({ username, email, phone, password });

  sendToken("User registered Successfully", user, res, 200);
});

//User Login
export const login = catchAsyncError(async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return next(new ErrorHandler("Please provide email and password!"));
  }

  const user = await User.findOne({ email }).select("+password");
  if (!user) {
    return next(new ErrorHandler("Invalid email or password!", 401));
  }
  const isPasswordMatched = await user.comparePassword(password);
  if (!isPasswordMatched) {
    return next(new ErrorHandler("Invalid email or password!", 401));
  }
  sendToken("Logged in Successfully", user, res, 200);
});

//User Logout
export const logout = catchAsyncError(async (req, res, next) => {
  res.cookie("token", "", {
    expires: new Date(Date.now()),
    httpOnly: true,
  });
  res.status(200).json({
    success: true,
    message: "Logged out Successfully!",
  });
});

//User Display
export const profile = catchAsyncError(async (req, res, next) => {
  const user = await User.findById(req.user.id);

  if (!user) {
    return next(new ErrorHandler("User not found", 404));
  }
  res.status(200).json({
    success: true,
    user,
  });
});
