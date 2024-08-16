import express from "express";
import {
  createClient,
  deleteClient,
  getClients,
  getClientById,
  updateClient,
} from "../controllers/clientController.js";
import { isAuthenticated } from "../middlewares/authentication.js";

const router = express.Router();

router.post("/post", isAuthenticated, createClient);
router.get("/get", isAuthenticated, getClients);
router.get("/get/:id", isAuthenticated, getClientById);
router.put("/update/:id", isAuthenticated, updateClient);
router.delete("/delete/:id", isAuthenticated, deleteClient);

export default router;
