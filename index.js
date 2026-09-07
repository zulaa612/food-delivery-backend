import dns from "dns";

dns.setServers(["8.8.8.8", "1.1.1.1"]);

import express from "express";
import mongoose from "mongoose";
import { User } from "./schemas/user-schema.js";
import connectDB from "./connectDB.js";
import authRouter from "./router/auth/auth.js";

const app = express();

const PORT = 4000;

app.use(express.json());

connectDB();

app.get("/api/health", (request, response) => {
  response.json({ message: `API HEALTH RUNNING ON ${PORT}` });
}); //read

app.use("/auth", authRouter);

app.post("/food/category", async (request, response) => {
  try {
    const { foodCategory } = request.body;
    console.log(foodCategory);
    // const category = await User.findOne({ foodCategory: foodCategory });

    if (!foodCategory) {
      response.status(404).json({ message: "Food category id required" });
    }
    response.status(201).json({ message: "Food category added successfully" });
  } catch (err) {
    response.status(500).json({ message: "Internal Server Error", error: err });
  }
});

app.get("/food/category", async (request, response) => {
  try {
    response.json({ message: "Food category retrieved", categories: [] });
  } catch (err) {
    response.status(500).json({ message: "Internal Server Error", error: err });
  }
});

app.post("/food/order", async (request, response) => {
  try {
    const { foodOrder } = request.body;
    console.log(foodOrder);

    if (foodOrder) {
      response.status(404).json({ message: "Food order detail required" });
    }
    response.status(201).json({ message: "Food order added successfully" });
  } catch (err) {
    response.status(500).json({ message: "Internal Server Error", error: err });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running, on port ${PORT}`);
});
