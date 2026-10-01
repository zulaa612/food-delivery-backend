import express from "express";
import { requireToken } from "../../middleware/require-token.js";
import { requireAdmin } from "../../middleware/require-admin.js";
import {
  createOrder,
  deleteOrder,
  getOrder,
  updateOrder,
} from "../../controllers/food-order-controller/food-order.js";
const router = express.Router();
const JWT_SECRET = process.env.JWT_SECRET;

router.post("/post", requireToken, createOrder);
router.get("/get", getOrder);
router.put("/put", requireToken, requireAdmin, updateOrder);
router.delete("/delete", requireToken, requireAdmin, deleteOrder);
export default router;
