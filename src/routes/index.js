import { Router } from "express";
import authRoutes from "../modules/auth/auth.routes.js";
import categoryRoutes from "../modules/category/category.routes.js";
import productRoutes from "../modules/products/product.routes.js";


const router = Router();

router.use("/auth", authRoutes);

router.use("/categories",categoryRoutes)

router.use("/product", productRoutes)

export default router