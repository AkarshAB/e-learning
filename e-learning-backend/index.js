import express, { json, urlencoded } from "express";
import { connect } from "mongoose";
import { config } from "dotenv";
import morgan from "morgan";
import cors from "cors";
import cookieParser from "cookie-parser";

import errorHandler from "./middleware/error.js";
import userRoutes from "./routes/userRoutes.js";
import adminApprovedRoutes from "./routes/adminRoutes.js";

config();
const server = express();
const port = process.env.PORT;

server.listen(port, () => {
  console.log(`listening to port ${port}`);
});

connect(process.env.MONGODB)
  .then(() => {
    console.log("MongoDB has been connected");
  })
  .catch((err) => console.log(`MongoDB connection error ${err.message}`));

server.use(morgan("dev"));
server.use(json());
server.use(urlencoded({ extended: true }));
server.use(cookieParser());
server.use(cors());
server.use(errorHandler);

server.use("/apiuser", userRoutes);
server.use("/apiadmin", adminApprovedRoutes);
