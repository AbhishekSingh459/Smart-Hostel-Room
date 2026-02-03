import mongoose from "mongoose";

const roomSchema = new mongoose.Schema({
  roomNo: { type: String, unique: true },
  capacity: Number,
  hasAC: Boolean,
  hasAttachedWashroom: Boolean,
  isAllocated: { type: Boolean, default: false }
});

export default mongoose.model("Room", roomSchema);
