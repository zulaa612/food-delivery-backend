import dns from "dns";

dns.setServers(["8.8.8.8", "1.1.1.1"]);

import mongoose from "mongoose";

const foodOrderSchema = new mongoose.Schema({
  food: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Food",
    required: true,
  },
  name: { type: String, required: true },
  image: { type: String },
  quantify: { type: String, required: true },
});

const orderSchema = new mongoose.Schema(
  {
    orderNumber: { type: Number, required: true },
    userEmail: { type: String, required: true },
    items: [foodOrderSchema],
    totalAmount: { type: Number, required: true },
    address: { type: String, required: true },
    status: {
      type: String,
      enum: ["Pending", "Delivered", "Cancelled"],
      default: "Pending",
    },
  },
  { timestamps: true },
);

export const FoodOrder = mongoose.model("FoodOrder", foodOrderSchema);
