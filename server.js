import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv/config";
import PostsRoutes from "./Routes/Posts.js";
import AuthRoutes from "./Routes/Auth.js";
import BodyParser from "body-parser";
import cors from "cors";

const app = express();

// middlewares
app.use(cors());
app.use(BodyParser.json());

// Routes
app.use("/posts", PostsRoutes);
app.use("/user", AuthRoutes);

// DB connection
mongoose.connect(
	`mongodb+srv://root:${process.env.MONGO_PASS}@cluster0.7udfn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,
	{ useNewUrlParser: true, useUnifiedTopology: true },
	() => console.log("Db Connection was Successfull")
);

const port = process.env.PORT || 5000;

app.listen(port);
