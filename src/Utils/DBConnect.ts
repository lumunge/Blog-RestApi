// database connection
import mongoose from "mongoose";
import config from "config";

const connect = async () => {
  const dbUri = config.get<string>("dbURI");

  try {
    mongoose.connect(dbUri);
    console.log("Database connected successfully!");
  } catch (error) {
    console.error("Database connection failed");
    process.exit(1);
  }
};

export default connect;
