import type { InferInsertModel, InferSelectModel } from "drizzle-orm";
import type { productsTable } from "../db/schema.ts";

export type Product = InferSelectModel<typeof productsTable>;
export type CreateProduct = InferInsertModel<typeof productsTable>;
export type UpdateProduct = InferInsertModel<typeof productsTable>;
export type PartialUpdateProduct = Partial<UpdateProduct>;

export type ProductId = Product["id"];
