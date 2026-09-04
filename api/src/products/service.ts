import type { NewProduct, Product } from "../db/schema.ts";
import ProductsDataAccess from "./dataAccess.ts";

const productsDataAccess = new ProductsDataAccess();

class ProductsService {
   async getProductsList() {
      const products = await productsDataAccess.getProductsList();

      return products;
   }
   async getProductById(id: number) {
      const product = await productsDataAccess.getProductById(id);

      return product;
   }
   async createProduct(newProduct: NewProduct) {
      const product = await productsDataAccess.createProduct(newProduct);

      return product;
   }
   async updateProduct(productData: Product, id: number) {
      const product = await productsDataAccess.updateProduct(productData, id);

      return product;
   }
   async deleteProduct(id: number) {
      const product = await productsDataAccess.deleteProduct(id);

      return product;
   }
}

export default ProductsService;
