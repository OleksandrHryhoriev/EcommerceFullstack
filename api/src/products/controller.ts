import { type Request, type Response } from "express";
import ProductsService from "./service.ts";
import ApiError from "../error/apiError.ts";
import type { ProductId } from "./productDataTypes.ts";
import { convertInputType } from "../utils/convertors.ts";

const productsService = new ProductsService();

export default class ProductController {
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
      // const newProductData: NewProduct = req.body;
      // if (!newProductData.name || !newProductData.price) {
      //    throw ApiError.badRequest("Required fields are empty");
      // }

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
