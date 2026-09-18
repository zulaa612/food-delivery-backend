import express from "express";
import { createFoodCat } from "../food-category-controllers/create-food-category.js";
import { getFoodCat } from "../food-category-controllers/get-food-category.js";
import { updateFoodCat } from "../food-category-controllers/put-food-category.js";
import { delFoodCat } from "../food-category-controllers/del-food-category.js";

const router = express.Router();

const requireCategoryName = (request, response, next) => {
  const { categoryName } = request.body;

  if (!categoryName) {
    return response.status(400).json({ message: "categoryName is required" });
  } else {
    next();
  }
};

const requireToken = (request, response, next) => {
  console.log(request.header);
};

router.post("/create", requireToken, requireCategoryName, createFoodCat); //create

router.get("/get", getFoodCat); //read

router.put("/update", updateFoodCat); //update

router.delete("/delete", delFoodCat); //delete

export default router;
