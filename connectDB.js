import mongoose from "mongoose";

const MONGODB_CONNECT_URL = process.env.MONGO_DB;
const connectDB = async () => {
  try {
    await mongoose.connect(MONGODB_CONNECT_URL);
    console.log("DB is connected");
  } catch (err) {
    console.log(err);
  }
};

export default connectDB;
