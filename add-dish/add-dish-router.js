import express from "express";
import { createDish } from "../add-dish-controllers/create-dish.js";
import { getDish } from "../add-dish-controllers/get-dish.js";
import { updateDish } from "../add-dish-controllers/put-dish.js";
import { delCatDish } from "../add-dish-controllers/del-category-dish.js";

const router = express.Router();


router.post("/create", createDish);
router.get("/get", getDish);
router.put("/update", updateDish);
router.delete("/delete", delCatDish);

export default router;
