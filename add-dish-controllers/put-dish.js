import { CategoryDish } from "../schemas/category-dish-schema.js";

export const updateDish = async (request, response) => {
  try {
    const { id, dishName, price, ingredients, image } = request.body;

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
    response.status(500).json({ message: "Internal Server Error", error: err });
  }
};
