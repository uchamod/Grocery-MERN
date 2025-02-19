import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Mongo DB connected succsussfuly!");
  } catch (err) {
    console.log("Mongo DB not connected!");
    process.exit(1); //means exit
  }
};
