import { Router } from "express";
import { authRegister } from "./auth.controller.js";

const authRoutes = Router();
authRoutes.post("/register", authRegister)

export default authRoutes