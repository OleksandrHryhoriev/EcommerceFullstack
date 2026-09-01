import { Request, Response } from "express";

export default class ProductController {
   async getProductsList(req: Request, res: Response) {
      res.send("List of all products");
   }
   async getProductById(req: Request, res: Response) {
      res.send("Product by ID");
   }
   async createProduct(req: Request, res: Response) {
      res.send("create Product");
   }
   async updateProduct(req: Request, res: Response) {
      res.send("update Product by ID");
   }
   async deleteProduct(req: Request, res: Response) {
      res.send("delete Product by ID");
   }
}
