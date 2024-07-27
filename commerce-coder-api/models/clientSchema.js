import mongoose, { Types } from "mongoose";

const clientSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Provide client name!"],
  },
  phone: {
    type: Number,
    required: [true, "Provide client phone number!"],
  },
  pan: {
    type: String,
    required: [true, "Provide client PAN number!"],
  },
  dob: { type: String },
  itr: { type: String },
  status: {
    type: String,
    enum: ["Completed", "In Progress"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export const Client = mongoose.model("Client", clientSchema);
