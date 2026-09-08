import { z } from "zod";
import dotenv from "dotenv";

dotenv.config();

const envSchema = z.object({
   PORT: z.string().default("8080").transform(Number),
   DATABASE_URL: z.string(),
   JWT_SECRET: z
      .string()
      .min(32, { message: "JWT_SECRET must be at least 32 characters long" }),
   NODE_ENV: z
      .enum(["development", "production", "test"])
      .default("development"),
});

const parsedEnv = envSchema.safeParse(process.env);

if (!parsedEnv.success) {
   console.error("Invalid environment variables:");

   const flattened = z.flattenError(parsedEnv.error);
   console.error(JSON.stringify(flattened.fieldErrors, null, 2));

   process.exit(1);
}

export const env = parsedEnv.data;
