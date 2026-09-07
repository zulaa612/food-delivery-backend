import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://zul:61226122@food-delivery.reawvxy.mongodb.net",
    );
    console.log("DB is connected");
  } catch (err) {
    console.log(err);
  }
};

connectDB();
export default connectDB;

