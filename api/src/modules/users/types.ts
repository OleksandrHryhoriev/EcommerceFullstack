import type { InferInsertModel, InferSelectModel } from "drizzle-orm";
import { usersTable } from "./schema.ts";
import type z from "zod";
import type { userAuthSchema } from "./dto.ts";

export type User = InferSelectModel<typeof usersTable>;
export type CreateUser = InferInsertModel<typeof usersTable>;
export type UserAuth = z.infer<typeof userAuthSchema>;
export type UserForClient = Omit<User, "passwordHash">;

// export type UpdateUser = InferInsertModel<typeof usersTable>;
// export type PartialUpdateUser = Partial<UpdateUser>;

// export type UserId = User["id"];
