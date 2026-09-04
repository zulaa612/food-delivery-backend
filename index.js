import dns from "dns";

dns.setServers(["8.8.8.8", "1.1.1.1"]);

import express from "express";
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
});

const User = mongoose.model("User", userSchema);

const app = express();
const port = 4000;
app.use(express.json());

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://zul:12345678Ab@food-delivery.reawvxy.mongodb.net/",
    );
    console.log("DB is connected");
  } catch (err) {
    console.log(err);
  }
};

(user) => {
  email;
  password;
};

connectDB();

app.get("/api/health", (request, response) => {
  response.json({ message: `api health running on ${port}` });
});

app.post("/signup", async (request, response) => {
  const { email, password } = request.body;
  const user = await User.create({ email, password });
  console.log(user);
  response.json({ message: "user created" });
});

app.listen(port, () => {
  console.log(`server is running, on port ${port}`);
});

///mongodb+srv://zul:61221166@food-delivery.reawvxy.mongodb.net/
