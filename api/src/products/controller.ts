import { type Request, type Response } from "express";
import ProductsService from "./service.ts";
import ApiError from "../error/apiError.ts";
import type { NewProduct } from "../db/schema.ts";

const productsService = new ProductsService();

export default class ProductController {
   async getProductsList(req: Request, res: Response) {
      const products = await productsService.getProductsList();
      res.json(products);
   }
   async getProductById(req: Request, res: Response) {
      const id = Number(req.params.id);
      if (isNaN(id)) {
         throw ApiError.badRequest("Incorrect product ID");
      }

      const product = await productsService.getProductById(id);

      if (!product) throw ApiError.notFound("Product not found");

      res.json(product);
   }
   async createProduct(req: Request, res: Response) {
      const newProductData: NewProduct = req.body;
      if (!newProductData.name || !newProductData.price) {
         throw ApiError.badRequest("Required fields are empty");
      }

      const product = await productsService.createProduct(newProductData);

      res.status(201).json(product);
   }
   async updateProduct(req: Request, res: Response) {
      const id = Number(req.params.id);
      if (isNaN(id)) {
         throw ApiError.badRequest("Incorrect product ID");
      }

      const updatedProduct = await productsService.updateProduct(req.body, id);

      if (!updatedProduct) throw ApiError.notFound("Product not found");

      res.json("Product updated");
   }
   async deleteProduct(req: Request, res: Response) {
      const id = Number(req.params.id);
      if (isNaN(id)) {
         throw ApiError.badRequest("Incorrect product ID");
      }
      const deletedProduct = await productsService.deleteProduct(id);

      if (!deletedProduct) throw ApiError.notFound("Product not found");

      res.status(204).end();
   }
}
