import mongoose from "mongoose";

const clientSchema = new mongoose.Schema({
  fullname: {
    type: String,
    required: [true, "Provide client full name!"],
  },
  phone: {
    type: String,
    required: [true, "Provide phone number!"],
    match: [/^\d{10}$/, "Phone number must be exactly 10 digits!"],
  },
  pan: {
    type: String,
    required: [true, "Provide PAN card number!"],
    unique: true,
    match: [/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/, "Provide valid PAN card number!"],
  },
  itr: {
    type: String,
    required: [true, "Provide ITR type!"],
    match: [/^ITR-[1-5]$/, "Select valid ITR type!"]
  },
  status: {
    type: String,
    enum: ["Created",  "In-Progress", "Completed", "Unaware"],
    default: "Created",
  },
  createdBy: {
    type: mongoose.Schema.ObjectId,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export const Client = mongoose.model("Client", clientSchema);
