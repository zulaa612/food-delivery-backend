import express from "express";
import { createDish } from "../add-dish-controllers/create-dish.js";

const router = express.Router();

router.post("/create", createDish);
