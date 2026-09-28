import { FoodOrder } from "../schemas/food-category-schema.js";

export const getOrder = async (request, response) => {
  try {
    const {
      startDate,
      endDate,
      status,
      page = 1,
      limit = 10,
      sort = -1,
    } = req.query;
    const filter = {};

    if (startDate && endDate) {
      filter.createdAt = {
        $gte: new Date(startDate),
        $LTE: new Date(endDate),
      };
    }

    if (status) {
      filter.status = status;
    }

    const totalOrders = await FoodOrder.countDocuments(filter);

    const orders = await FoodOrder.find(filter)
      .sort({ createdAt: Number(sort) })
      .skip((page - 1) * limit)
      .limit(Number(limit));
    res.status(200).json({
      success: true,
      totalOrders,
      totalPages: Math.ceil(totalOrders / limit),
      currentPage: Number(page),
      orders,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
