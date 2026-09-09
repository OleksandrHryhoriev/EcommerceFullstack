import { createInsertSchema, createSelectSchema } from "drizzle-orm/zod";
import { productsTable } from "./schema.ts";
import { createIdValidationSchema } from "../../core/utils/createValidationSchema.ts";

// Product schemas
export const productSchema = createSelectSchema(productsTable);
export const createProductSchema = createInsertSchema(productsTable);
export const updateProductSchema = createInsertSchema(productsTable);
export const partialUpdateProductSchema = updateProductSchema.partial();

// Params ProductID schema
export const idParamsSchema = createIdValidationSchema(productSchema.shape.id);
