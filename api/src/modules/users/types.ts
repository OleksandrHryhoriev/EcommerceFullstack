import type { InferInsertModel, InferSelectModel } from "drizzle-orm";
import { usersTable } from "./schema.ts";

export type User = InferSelectModel<typeof usersTable>;
export type CreateUser = InferInsertModel<typeof usersTable>;
export type UpdateUser = InferInsertModel<typeof usersTable>;
export type PartialUpdateUser = Partial<UpdateUser>;

export type UserForClient = Omit<User, "passwordHash">;

export type UserId = User["id"];
