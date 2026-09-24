import express from "express";
import { createDish } from "../add-dish-controllers/create-dish.js";
import { getDish } from "../add-dish-controllers/get-dish.js";
import { updateDish } from "../add-dish-controllers/put-dish.js";
import { delCatDish } from "../add-dish-controllers/del-category-dish.js";
import { requireToken } from "../middleware/require-token.js";
import { requireAdmin } from "../middleware/require-admin.js";

const router = express.Router();

router.post("/create", createDish, requireToken, requireAdmin);
router.get("/get", getDish);
router.put("/update/:id", updateDish, requireToken, requireAdmin);
router.delete("/delete/:id", delCatDish, requireToken, requireAdmin);

export default router;
