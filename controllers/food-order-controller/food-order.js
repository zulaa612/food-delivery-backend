import { FoodOrder } from "../../schemas/food-order-schema.js";

export const createOrder = async (request, response) => {
  try {
    const { user, totalPrice, address, foodOrderItems, status } = request.body;

    const order = await FoodOrder.create({
      user,
      totalPrice,
      address,
      foodOrderItems,
      status,
    });

    response.status(201).json({ message: "Order Created", order: order });
  } catch (err) {
    console.error("Order creation failed:", err);
    response
      .status(500)
      .json({ message: "Internal Server Error", error: err.message });
  }
};

export const getOrder = async (request, response) => {
  try {
    const orders = await FoodOrder.find();
    response.status(200).json({
      message: "Orders read successfully",
      orders: orders,
    });
  } catch (err) {
    console.log(err);
    response
      .status(500)
      .json({ message: "Internal Server Error", error: err.message });
  }
};

export const updateOrder = async (request, response) => {
  try {
    const { id, status } = request.body;

    const updatedOrder = await FoodOrder.findByIdAndUpdate(
      id,
      {
        status: status,
      },
      {
        new: true,
        runValidators: true,
      },
    );

    if (!updatedOrder) {
      return response.status(404).json({ message: "Order not found" });
    }

    response.status(200).json({
      message: "Order updated successfully",
      order: updatedOrder,
    });
  } catch (err) {
    response
      .status(500)
      .json({ message: "Internal Server Error", error: err.message });
  }
};

export const deleteOrder = async (request, response) => {
  try {
    const { id } = request.body;

    const delOrder = await FoodOrder.findByIdAndDelete(id);

    if (!delOrder) {
      return response.status(404).json({ message: "Order not found" });
    }

    response.status(200).json({
      message: "Order deleted successfully",
      order: delOrder,
    });
  } catch (err) {
    console.log(err);
    response
      .status(500)
      .json({ message: "Internal Server Error", error: err.message });
  }
};
