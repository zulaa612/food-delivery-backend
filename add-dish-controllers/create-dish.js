import { CategoryDish } from "../schemas/category-dish-schema.js";

export const createDish = async (request, response) => {
  try {
    const { dishName, price, imageUrl, category, ingredients } = request.body;

    if (!dishName || !price) {
      return response.status(400).json({ message: "Fill the form" });
    }

    const newDish = await CategoryDish.create({
      dishName,
      price,
      imageUrl,
      category,
      ingredients,
    });

    return response.status(201).json({
      message: "New dish created:",
      newDish: newDish,
    });
  } catch (err) {
    console.log(err);
    return response
      .status(500)
      .json({ message: "Error creating dish:", error: err });
  }
};
