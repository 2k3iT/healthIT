import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema({
  ownerId: { type: String, required: true },
  name: {
    type: String,
    required: true,
  },
  bornDate: {
    type: String,
    required: true,
  },
  doctor: {
    type: String,
    required: true,
  },
  genre: {
    type: String,
    required: true,
  },
  tel: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  reason: {
    type: String,
    required: true,
  },
  note: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    default: "Pending",
  },
  date: {
    type: Date,
    default: Date.now(),
  },
});

const OrderModel =
  mongoose.models.order || mongoose.model("order", OrderSchema);

export default OrderModel;
