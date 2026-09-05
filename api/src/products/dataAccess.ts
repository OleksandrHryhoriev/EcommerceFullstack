import { db } from "../db/index.ts";
import { productsTable } from "../db/schema.ts";
import { eq } from "drizzle-orm";
import type {
   CreateProduct,
   UpdateProduct,
   ProductId,
   PartialUpdateProduct,
} from "./productDataTypes.ts";

class ProductsDataAccess {
   async getProductsList() {
      const products = await db.select().from(productsTable);
      return products;
   }
   async getProductById(id: ProductId) {
      const [product] = await db
         .select()
         .from(productsTable)
         .where(eq(productsTable.id, id));

      return product;
   }
   async createProduct(productData: CreateProduct) {
      const [product] = await db
         .insert(productsTable)
         .values(productData)
         .returning();

      return product;
   }
   async updateProduct(productData: UpdateProduct, id: ProductId) {
      const [updatedProduct] = await db
         .update(productsTable)
         .set(productData)
         .where(eq(productsTable.id, id))
         .returning();

      return updatedProduct;
   }
   async partielUpdateProduct(
      productData: PartialUpdateProduct,
      id: ProductId,
   ) {
      const [updatedProduct] = await db
         .update(productsTable)
         .set(productData)
         .where(eq(productsTable.id, id))
         .returning();

      return updatedProduct;
   }
   async deleteProduct(id: ProductId) {
      const [deletedProduct] = await db
         .delete(productsTable)
         .where(eq(productsTable.id, id))
         .returning();

      return deletedProduct;
   }
}

export default ProductsDataAccess;
