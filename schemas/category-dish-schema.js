import mongoose from "mongoose";

const categoryDishSchema = new mongoose.Schema(
  {
    dishName: { type: String, required: true },
    price: { type: Number, required: true },
    category: {
      type: mongoose.Schema.ObjectId,
      ref: "FoodCategory",
      required: true,
    },
    ingredients: { type: String },
    imageUrl: { type: String },
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  },
);

export const CategoryDish = mongoose.model("CategoryDish", categoryDishSchema);
