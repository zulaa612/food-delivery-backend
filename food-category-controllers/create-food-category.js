import { FoodCategory } from "../schemas/food-category-schema.js";

export const createFoodCat = async (request, response) => {
  try {
    const { categoryName } = request.body;

    const newFoodCat = await FoodCategory.create({
      categoryName,
    });

    return response.status(201).json({
      message: "Food categories created:",
      foodCategories: newFoodCat,
    });
  } catch (err) {
    if (err.code === 11000) {
      return response
        .status(409)
        .json({ message: "Food category already exist." });
    }
    console.log(err);
    return response
      .status(500)
      .json({ message: "Internal Server Error", error: err });
  }
};
