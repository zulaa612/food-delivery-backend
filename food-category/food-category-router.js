import express from "express";
import { createFoodCat } from "../food-category-controllers/create-food-category.js";
import { getFoodCat } from "../food-category-controllers/get-food-category.js";
import { updateFoodCat } from "../food-category-controllers/put-food-category.js";

const router = express.Router();

router.post("/create", createFoodCat); //create

router.get("/get", getFoodCat); //read

router.put("/update", updateFoodCat); //update

//router.delete("/del", delFoodCategoryController); //delete

export default router;
