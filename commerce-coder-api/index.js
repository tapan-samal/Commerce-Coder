import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import dbConnection from "./config/dbConnection.js";
import  userRouter from "./routes/userRouter.js";
import  clientRouter from "./routes/clientRouter.js";
import { errorMiddleware } from "./middlewares/errorHandler.js";
dotenv.config();

const PORT = process.env.PORT || 4002;
dbConnection();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(
  cors({
    origin: [process.env.FRONTEND_URL],
    methods: ["POST", "GET", "PUT", "DELETE"],
    credentials: true,
  })
);


app.use("/user", userRouter);
app.use("/client", clientRouter);

app.use(errorMiddleware);

app.listen(PORT, () => {
  console.log(`Application listening on port ${PORT}!`);
});
