import dns from "dns";

dns.setServers(["8.8.8.8", "1.1.1.1"]);

import express from "express";
import connectDB from "./connectDB.js";
import cors from "cors";
import authRouter from "./router/auth/auth.js";
import foodCategoryRouter from "./food-category/food-category-router.js";

const app = express();

const PORT = 4000;

app.use(express.json());
app.use(cors());

connectDB();

app.use("/auth", authRouter);

app.use("/food-category", foodCategoryRouter);

app.post("/food/order", async (request, response) => {
  try {
    const { foodOrder } = request.body;
    console.log(foodOrder);

    if (foodOrder) {
      response.status(404).json({ message: "Food order detail required" });
    }
    response.status(200).json({ message: "Food order added successfully" });
  } catch (err) {
    response.status(500).json({ message: "Internal Server Error", error: err });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running, on port ${PORT}`);
});
