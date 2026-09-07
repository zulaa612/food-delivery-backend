import mongoose from "mongoose";

const foodOrderSchema = new mongoose.Schema({
  categoryName: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
});

export const FoodOrder = mongoose.model("FoodOrder", foodOrderSchema);
