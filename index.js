import dns from "dns";

dns.setServers(["8.8.8.8", "1.1.1.1"]);

import express from "express";
import mongoose from "mongoose";
import { User } from "./schemas/user-schema.js";
import connectDB from "./connectDB.js";
import authRouter from "./router/auth/auth.js";
import foodCategoryRouter from "./food-category/food-category-router.js";

const app = express();

const PORT = 4000;

app.use(express.json());

connectDB();

app.get("/api/health", (request, response) => {
  response.json({ message: `API HEALTH RUNNING ON ${PORT}` });
}); //read

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
