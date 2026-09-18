import { CategoryDish } from "../schemas/category-dish-schema.js";

export const delCatDish = async (request, response) => {
  try {
    const { id } = request.body;

    const delDish = await CategoryDish.findByIdAndDelete(id);

    if (!delDish) {
      return response.status(404).json({ message: "Dish not found" });
    }
    response.status(200).json({ message: "deleted dish:", delDish });
  } catch (err) {
    response.status(500).json({ message: "Internal Server Error", error: err });
  }
};
