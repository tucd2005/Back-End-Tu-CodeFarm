import { Router } from "express";
import { getAllProduct } from "./product.controller.js";


const productRoutes = Router();

    productRoutes.get("/product", getAllProduct)

export default productRoutes