import mongoose from "mongoose";

const { Schema } = mongoose;

const foodOrderSchema = new Schema(
  {
    food: {
      type: Schema.Types.ObjectId,
      ref: "Dishes",
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
  },
  { _id: false },
);

const orderSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    totalPrice: {
      type: Number,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    foodOrder: {
      type: [foodOrderSchema],
      required: true,
    },
    status: {
      type: String,
      enum: ["Pending", "Delivered", "Cancelled"],
      default: "Pending",
      required: true,
    },
  },
  { timestamps: true },
);

export const FoodOrder =
  mongoose.models.FoodOrder || mongoose.model("FoodOrder", orderSchema);
