import { type Request, type Response } from "express";
import { convertInputType } from "../../core/utils/convertors.ts";
import type { ProductId } from "./types.ts";
import ProductsService from "./service.ts";

const productsService = new ProductsService();

class ProductsController {
   async getProductsList(req: Request, res: Response) {
      const products = await productsService.getProductsList();
      res.json(products);
   }
   async getProductById(req: Request, res: Response) {
      const id = convertInputType<ProductId>(req.params.id as string);

      const product = await productsService.getProductById(id);

      res.json(product);
   }
   async createProduct(req: Request, res: Response) {
      const product = await productsService.createProduct(req.body);

      res.status(201).json(product);
   }
   async updateProduct(req: Request, res: Response) {
      const id = convertInputType<ProductId>(req.params.id as string);

      const updatedProduct = await productsService.updateProduct(req.body, id);

      res.json(updatedProduct);
   }
   async partialUpdateProduct(req: Request, res: Response) {
      const id = convertInputType<ProductId>(req.params.id as string);

      const updatedProduct = await productsService.partialUpdateProduct(
         req.body,
         id,
      );

      res.json(updatedProduct);
   }
   async deleteProduct(req: Request, res: Response) {
      const id = convertInputType<ProductId>(req.params.id as string);

      await productsService.deleteProduct(id);

      res.status(204).end();
   }
}

export default ProductsController;
