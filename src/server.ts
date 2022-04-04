import express from "express";
import config from "config";
import PostsRoutes from "./Routes/PostRoutes";
import AuthRoutes from "./Routes/AuthRoutes";
import BodyParser from "body-parser";
import cors from "cors";
import DBConnect from "./Utils/DBConnect";
import logger from "./Utils/Logger";

const app = express();

// middlewares
app.use(cors());
app.use(BodyParser.json());

// Routes
app.use("/posts", PostsRoutes);
app.use("/users", AuthRoutes);

const port = config.get<number>("port") || 5000;

app.listen(port, async () => {
  logger.info(`App is Live @ http://localhost:${port}`);
  await DBConnect();
  //   routes(app);
});
