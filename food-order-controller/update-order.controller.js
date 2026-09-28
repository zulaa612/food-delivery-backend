import { FoodOrder } from "../schemas/food-category-schema.js";

export const updateOrder = async (request, response) => {
  try {
    const { orderId, status } = req.body;
    if (!orderId || !Array.isArray(orderId) || orderId.length === 0) {
      return res.status(400).json({ success: false, message: "error" });
    }

    await FoodOrder.updateMany(
      { _id: { $in: orderId } },
      { $set: { status: status } },
    );

    res.status(200).json({ success: true, message: "Updated/" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
