import express from "express";
import { signup, login, logout, profile } from "../controllers/userController.js";
import { isAuthenticated } from "../middlewares/authentication.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.get("/logout", isAuthenticated, logout);
router.get("/profile", isAuthenticated, profile);


export default router;

