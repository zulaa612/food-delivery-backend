import { FoodCategory } from "../schemas/food-category-schema.js";

export const delFoodCat = async (request, response) => {
  try {
    const { id } = request.body;

    const delCat = await FoodCategory.findByIdAndDelete(id);

    if (!delCat) {
      return response.status(404).json({ message: "Food category not found" });
    }
    response.status(200).json({ message: "deleted cat:", delCat });
  } catch (err) {
    response.status(500).json({ message: "Internal server error", error: err });
  }
};
