import { catchAsyncError } from "../middlewares/catchAsyncError.js";
import ErrorHandler from "../middlewares/errorHandler.js";
import { Client } from "../models/clientSchema.js";

export const createClient = catchAsyncError(async (req, res, next) => {
  const { fullname, phone, pan, itr, status } = req.body;
  if (!fullname || !phone || !pan || !itr) {
    return next(new ErrorHandler("Please fill all the input fields!", 400));
  }
  let client = await Client.findOne({ pan });
  if (client) {
    return next(new ErrorHandler("Client with same PAN, already exists!", 400));
  }
  const createdBy = req.user._id;
  client = await Client.create({
    fullname,
    phone,
    pan,
    itr,
    status,
    createdBy,
  });
  res.status(200).json({
    status: true,
    client,
    message: "Client created successfully!",
  });
});

export const getClients = catchAsyncError(async (req, res, next) => {
  const client = await Client.find();
  res.status(200).json({
    success: true,
    client,
  });
});

export const getClientById = catchAsyncError(async (req, res, next) => {
  const { id } = req.params;
  const client = await Client.findById(id);
  if (!client) {
    return next(new ErrorHandler("Client not found!", 404));
  }
  res.status(200).json({
    success: true,
    client,
  });
});

export const updateClient = catchAsyncError(async (req, res, next) => {
  const { id } = req.params;
  let client = await Client.findById(id);
  if (!client) {
    return next(new ErrorHandler("Client not found", 404));
  }
  client = await Client.findByIdAndUpdate(id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });
  res.status(200).json({
    success: true,
    message: "Client updated successfully",
    client,
  });
});

export const deleteClient = catchAsyncError(async (req, res, next) => {
  const { id } = req.params;
  const client = await Client.findById(id);
  if (!client) {
    return next(new ErrorHandler("Client not found!", 404));
  }
  await client.deleteOne();
  res.status(200).json({
    success: true,
    message: "Client deleted successfully!",
  });
});
