import mongoose from "mongoose";

const foodCategorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
});

export const FoodCategory = mongoose.model("FoodCategory", foodCategorySchema);
