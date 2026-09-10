import mongoose from "mongoose";

const dishSchema = new mongoose.Schema(
  {
    dishName: { type: String, required: true },
    price: { type: Number, required: true },
    ingredients: String,
    image: String,
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  },
);

export const AddDish = mongoose.model("AddDish", dishSchema);
