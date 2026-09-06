import z from "zod";

export function createIdValidationSchema(idSchema: z.ZodType) {
   const dynamicIdSchema =
      idSchema.def.type === "number"
         ? z.string().regex(/^\d+$/, "ID must be a valid numeric string")
         : z.string();

   return z.object({
      id: dynamicIdSchema,
   });
}
