import { Router } from "express";
import ProductController from "./controller.ts";

const productController = new ProductController();
const productsRouter = Router();

productsRouter.get("/", productController.getProductsList);
productsRouter.get("/:id", productController.getProductById);
productsRouter.post("/", productController.createProduct);
productsRouter.put("/:id", productController.updateProduct);
productsRouter.delete("/:id", productController.deleteProduct);

export default productsRouter;
