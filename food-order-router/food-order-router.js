import express from "express";
import { getOrder } from "../food-order-controller/get-order-controller.js";
import { updateOrder } from "../food-category-controllers/put-food-category.js";

const router = express.Router();

const requireOrderName = (request, response, next) => {
  const { categoryName } = request.body;
  if (!categoryName) {
    return response.status(400).json({ message: "food order is required" });
  } else {
    next();
  }
};

router.get("/get", getOrder);
router.put("/apdate", updateOrder);

export default router;
