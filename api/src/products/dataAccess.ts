import { db } from "../db/index.ts";
import { productsTable, type NewProduct, type Product } from "../db/schema.ts";
import { eq } from "drizzle-orm";

class ProductsDataAccess {
   async getProductsList() {
      const products = await db.select().from(productsTable);
      return products;
   }
   async getProductById(id: number) {
      const [product] = await db
         .select()
         .from(productsTable)
         .where(eq(productsTable.id, id));

      return product;
   }
   async createProduct(productData: NewProduct) {
      const [product] = await db
         .insert(productsTable)
         .values(productData)
         .returning();

      return product;
   }
   async updateProduct(productData: Product, id: number) {
      const [updatedProduct] = await db
         .update(productsTable)
         .set(productData)
         .where(eq(productsTable.id, id))
         .returning();

      return updatedProduct;
   }
   async deleteProduct(id: number) {
      const [deletedProduct] = await db
         .delete(productsTable)
         .where(eq(productsTable.id, id))
         .returning();

      return deletedProduct;
   }
}

export default ProductsDataAccess;
