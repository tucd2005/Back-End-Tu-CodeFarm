import { Router } from "express";
import { createCategory, deleteCategory, getDetailCategory, getListCategory, restoreCategory, softDeleteCategory, updateCategory } from "./category.controller.js";
import validBodyRequest from "../../common/middlewares/validBodyRequest.js";
import categorySchema from "./category.schema.js";

const categoryRoutes = Router()

categoryRoutes.get("/", getListCategory);

categoryRoutes.get("/:id", getDetailCategory);

categoryRoutes.post("/", createCategory);

categoryRoutes.patch("/:id", updateCategory);

categoryRoutes.use(validBodyRequest(categorySchema))

categoryRoutes.delete("/delete/:id", deleteCategory);

categoryRoutes.delete("/soft-delete/:id", softDeleteCategory);

categoryRoutes.patch("/restore/:id", restoreCategory)

export default categoryRoutes