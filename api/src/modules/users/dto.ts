import { createInsertSchema, createSelectSchema } from "drizzle-orm/zod";
import { z } from "zod";
import { usersTable } from "./schema.ts";

// User schemas
export const userSchema = createSelectSchema(usersTable);

export const userAuthSchema = z.object({
   email: z.email(),
   password: z.string().min(4),
});

// export const updateUserSchema = createInsertSchema(usersTable).omit({
//    email: true,
//    role: true,
//    // createdAt: true,
// });
// export const partialUpdateUserSchema = updateUserSchema.partial();

// // Params UserID schema
// const idFieldSchema = userSchema.shape.id;
// const dynamicIdSchema =
//    idFieldSchema.def.type === "number"
//       ? z.string().regex(/^\d+$/, "ID must be a valid numeric string")
//       : z.string();

// export const idParamsSchema = z.object({
//    id: dynamicIdSchema,
// });
