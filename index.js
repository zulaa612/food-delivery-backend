import dns from "dns";

dns.setServers(["8.8.8.8", "1.1.1.1"]);

import express from "express";
import mongoose from "mongoose";
import { User } from "./schemas/user-schema.js";
import connectDB from "./connectDB.js";

const app = express();

const PORT = 4000;

app.use(express.json());

connectDB();

app.get("/api/health", (request, response) => {
  response.json({ message: `API HEALTH RUNNING ON ${PORT}` });
}); //read

app.post("/signup", async (request, response) => {
  try {
    const { email, password } = request.body;
    const user = await User.create({ email, password });

    response.status(201).json({ message: "user created", user: user });
  } catch (err) {
    response.status(500).json({ message: "Internal Server Error", error: err });
  }
});

app.post("/food/category", async (request, response) => {
  try {
    const { foodCategory } = request.body;
    console.log(foodCategory);
    const category = await User.findOne({ foodCategory: foodCategory });

    if (!foodCategory) {
      response.status(404).json({ message: "Food category id required" });
    }
    response.status(201).json({ message: "Food category added successful" });
  } catch (err) {
    response.status(500).json({ message: "Internal Server Error", error: err });
  }
});

app.post("/login", async (request, response) => {
  try {
    const { email, password } = request.body;
    console.log(email, password);
    const user = await User.findOne({ email: email });
    if (!user) {
      response.status(404).json({ message: "user not found" });
    }
    response.status(200).json({ message: "user not found" });
  } catch (err) {
    response.status(500).json({ message: "Internal Server Error", error: err });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running, on port ${PORT}`);
});
