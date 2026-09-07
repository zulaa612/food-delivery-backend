import { FoodCategory } from "../schemas/food-category.js";

export const createFoodCat = async (request, response) => {
  try {
    const { categoryName } = request.body;

    const newFoodCat = await FoodCategory.create({
      categoryName,
    });

    response.status(201).json({
      message: "Food categories created:",
      foodCategories: newFoodCat,
    });
  } catch (err) {
    response.status(500).json({ message: "Internal Server Error", error: err });
  }
};
