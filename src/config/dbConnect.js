import mongoose from "mongoose";
import { MONGO_URL } from "./serverConfig.js";

const dbConnect = async () => {
  try {
    mongoose.set("strictQuery", false);
    const connected = await mongoose.connect(MONGO_URL);
    console.log(`Mongodb connected ${connected.connection.host}`);
  } catch (error) {
    console.log(`Error: ${error.message}`);
    process.exit(1);
  }
};

export default dbConnect;
