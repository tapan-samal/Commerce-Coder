import express from "express";
import dotenv from "dotenv"; // Import dotenv
import cors from "cors";
import cookieParser from "cookie-parser";
import connectDb from "./config/dbConnection.js";
import { UserRouter } from "./routes/user.js";
dotenv.config(); // Configure dotenv

const PORT = process.env.PORT || 4002;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
    origin: ["http://localhost:5173"],
    credentials: true,
  })
);
app.use(cookieParser());

app.use("/auth", UserRouter);

connectDb();

app.listen(PORT, () => {
  console.log(`Application listening on port ${PORT}!`);
});
