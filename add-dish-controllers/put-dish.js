import { CategoryDish } from "../schemas/category-dish-schema.js";

export const updateDish = async (request, response) => {
  try {
    const { id } = request.params;
    const { dishName, price, ingredients, imageUrl } = request.body;

    const categoryDish = await CategoryDish.findByIdAndUpdate(
      id,
      { dishName: dishName },
      { price: price },
      { ingredients: ingredients },
      { image: image },
      { new: true },
    );

    if (!categoryDish) {
      return response
        .status(404)
        .json({ message: "Category dishes not found" });
    }
  } catch (err) {
    console.error("Update dish error:", err);
    return response
      .status(500)
      .json({ message: "Internal Server Error", error: err });
  }
};
