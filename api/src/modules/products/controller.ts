import { type Request, type Response } from "express";
import ApiError from "../../core/error/apiError.ts";
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

      if (!product) throw ApiError.notFound("Product not found");

      res.json(product);
   }
   async createProduct(req: Request, res: Response) {
      const product = await productsService.createProduct(req.body);

      res.status(201).json(product);
   }
   async updateProduct(req: Request, res: Response) {
      const id = convertInputType<ProductId>(req.params.id as string);

      const updatedProduct = await productsService.updateProduct(req.body, id);

      if (!updatedProduct) throw ApiError.notFound("Product not found");

      res.json(updatedProduct);
   }
   async partialUpdateProduct(req: Request, res: Response) {
      const id = convertInputType<ProductId>(req.params.id as string);

      const updatedProduct = await productsService.partialUpdateProduct(
         req.body,
         id,
      );

      if (!updatedProduct) throw ApiError.notFound("Product not found");

      res.json(updatedProduct);
   }
   async deleteProduct(req: Request, res: Response) {
      const id = convertInputType<ProductId>(req.params.id as string);

      const deletedProduct = await productsService.deleteProduct(id);

      if (!deletedProduct) throw ApiError.notFound("Product not found");

      res.status(204).end();
   }
}

export default ProductsController;
