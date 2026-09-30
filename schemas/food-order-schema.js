import mongoose from "mongoose";

export const DELIVERY_STATES = ["Pending", "Delivered", "Cancelled"];

const foodOrderSchema = new mongoose.Schema(
  {
    customer: { type: String, required: true, trim: true },
    items: [
      {
        food: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Food",
          required: true,
        },
        quantity: { type: Number, default: 1, min: 1 },
      },
    ],
    total: { type: Number, required: true, min: 0 },
    address: { type: String, trim: true },
    state: { type: String, enum: DELIVERY_STATES, default: "Pending" },
  },
  { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } },
);

export const foodOrder = mongoose.model("FoodOrder", foodOrderSchema);
