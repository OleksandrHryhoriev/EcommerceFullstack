import { type Request, type Response } from "express";
import ProductsService from "./service.ts";

const productsService = new ProductsService();

export default class ProductController {
   async getProductsList(req: Request, res: Response) {
      try {
         const products = await productsService.getProductsList();
         res.status(200).json(products);
      } catch (error) {
         res.status(500).send(`Failed to get products list from DB: ${error}`);
      }
   }
   async getProductById(req: Request, res: Response) {
      try {
         const id = Number(req.params.id);
         const product = await productsService.getProductById(id);

         if (product) {
            res.status(200).json(product);
         } else {
            res.status(404).json({ message: "Product not found" });
         }
      } catch (error) {
         res.status(500).send(`Failed to get product from DB: ${error}`);
      }
   }
   async createProduct(req: Request, res: Response) {
      try {
         const product = await productsService.createProduct(req.body);

         res.status(201).send(product);
      } catch (error) {
         res.status(500).send(error);
      }
   }
   async updateProduct(req: Request, res: Response) {
      try {
         const id = Number(req.params.id);
         const updatedProduct = await productsService.updateProduct(
            req.body,
            id,
         );

         if (updatedProduct) {
            res.status(200).send("Product updated succesfully");
         } else {
            res.status(404).json({ message: "Product not found" });
         }
      } catch (error) {
         res.status(500).send(`Failed to update product. ${error}`);
      }
   }
   async deleteProduct(req: Request, res: Response) {
      try {
         const id = Number(req.params.id);
         const deletedProduct = await productsService.deleteProduct(id);

         if (deletedProduct) {
            res.status(204).send("deleted");
         } else {
            res.status(404).json({ message: "Product not found" });
         }
      } catch (error) {
         res.status(500).send(`Failed to delete product. ${error}`);
      }
   }
}
