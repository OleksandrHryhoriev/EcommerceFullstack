import { createInsertSchema, createSelectSchema } from "drizzle-orm/zod";
import { z } from "zod";
import { productsTable } from "../db/schema.ts";

// Product schemas
export const productSchema = createSelectSchema(productsTable);
export const createProductSchema = createInsertSchema(productsTable);
export const updateProductSchema = createInsertSchema(productsTable);
export const partialUpdateProductSchema = updateProductSchema.partial();

// Params ProductID schema
const idFieldSchema = productSchema.shape.id;
const dynamicIdSchema =
   idFieldSchema.def.type === "number"
      ? z.string().regex(/^\d+$/, "ID must be a valid numeric string")
      : z.string();

export const idParamsSchema = z.object({
   id: dynamicIdSchema,
});
