
import { CategoryDish } from "../schemas/category-dish-schema.js";

export const getDish = async (request, response) => {
  try {
    const categoryDish = await CategoryDish.find();
    response
      .status(200)
      .json({ message: "Category dishes found:", CategoryDish: categoryDish });
  } catch (err) {
    response.status(500).json({ message: "Internal server error", error: err });
  }
};
