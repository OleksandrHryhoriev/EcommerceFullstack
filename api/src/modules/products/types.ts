import type { InferInsertModel, InferSelectModel } from "drizzle-orm";
import { productsTable } from "./schema.ts";

export type Product = InferSelectModel<typeof productsTable>;
export type CreateProduct = InferInsertModel<typeof productsTable>;
export type UpdateProduct = InferInsertModel<typeof productsTable>;
export type PartialUpdateProduct = Partial<UpdateProduct>;

export type ProductId = Product["id"];
