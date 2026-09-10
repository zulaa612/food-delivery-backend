
import { AddDish } from "../schemas/dish-schema.js";

export const createDish = async (request, response) => {
  try {
    const { dishName, price, image, ingredients } = request.body;

    if (!dishName || !price) {
      response.status(400).json({ message: "Fill the form" });
    }

    const newDish = await AddDish.create({
      dishName,
      price,
      image,
      ingredients,
    });

    response.status(201).json({
      message: "New dish created:",
      newDish: newDish,
    });
  } catch (err) {
    response.status(500).json({ message: "Error creating dish:", error: err });
  }
};
