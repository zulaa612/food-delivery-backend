import dns from "dns";

dns.setServers(["8.8.8.8", "1.1.1.1"]);

import "dotenv/config";
import express from "express";
import connectDB from "./connectDB.js";
import cors from "cors";
import authRouter from "./router/auth/auth.js";
import foodCategoryRouter from "./food-category/food-category-router.js";
import addDishRouter from "./add-dish/add-dish-router.js";

const app = express();

const PORT = 4000;

app.use(express.json());
app.use(cors());

connectDB();

app.use("/auth", authRouter);

app.use("/food-category", foodCategoryRouter);

app.use("/add-dish", addDishRouter);

app.listen(PORT, () => {
  console.log(`Server is running, on port ${PORT}`);
});
