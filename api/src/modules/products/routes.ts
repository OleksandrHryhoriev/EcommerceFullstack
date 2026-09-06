import { Router } from "express";
import ProductsController from "./controller.ts";
import {
   validateData,
   validateParams,
} from "../../core/middlewares/validationMiddleware.ts";

import {
   idParamsSchema,
   createProductSchema,
   updateProductSchema,
   partialUpdateProductSchema,
} from "./dto.ts";

const productController = new ProductsController();
const productsRouter = Router();

productsRouter.get("/", productController.getProductsList);
productsRouter.get(
   "/:id",
   validateParams(idParamsSchema),
   productController.getProductById,
);
productsRouter.post(
   "/",
   validateData(createProductSchema),
   productController.createProduct,
);
productsRouter.put(
   "/:id",
   validateParams(idParamsSchema),
   validateData(updateProductSchema),
   productController.updateProduct,
);
productsRouter.patch(
   "/:id",
   validateParams(idParamsSchema),
   validateData(partialUpdateProductSchema),
   productController.partialUpdateProduct,
);
productsRouter.delete(
   "/:id",
   validateParams(idParamsSchema),
   productController.deleteProduct,
);

export default productsRouter;
