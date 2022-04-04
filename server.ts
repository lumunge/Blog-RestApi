import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import PostsRoutes from "./Routes/PostRoutes";
import AuthRoutes from "./Routes/AuthRoutes";
import BodyParser from "body-parser";
import cors from "cors";

const app = express();

// middlewares
app.use(cors());
app.use(BodyParser.json());

dotenv.config();

// Routes
app.use("/posts", PostsRoutes);
app.use("/users", AuthRoutes);

// DB connection
mongoose.connect(
  process.env.MONGO_URI as string,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log("Db Connection was Successfull")
);

const port = process.env.PORT || 5000;

app.listen(port);
