import mongoose from "mongoose";

const foodOrderSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
});

export const FoodOrder = mongoose.model("FoodOrder", foodOrderSchema);
