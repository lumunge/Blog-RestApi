import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv/config";
import PostsRoutes from "./Routes/PostRoutes.js";
import AuthRoutes from "./Routes/AuthRoutes.js";
import BodyParser from "body-parser";
import cors from "cors";

const app = express();

// middlewares
app.use(cors());
app.use(BodyParser.json());

// Routes
app.use("/posts", PostsRoutes);
app.use("/users", AuthRoutes);

// DB connection
mongoose.connect(
	process.env.MONGO_URI,
	{ useNewUrlParser: true, useUnifiedTopology: true },
	() => console.log("Db Connection was Successfull")
);

const port = process.env.PORT || 5000;

app.listen(port);
