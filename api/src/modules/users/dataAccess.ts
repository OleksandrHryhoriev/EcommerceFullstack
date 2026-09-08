import { db } from "../../core/db/index.ts";
import { eq } from "drizzle-orm";
import { usersTable } from "./schema.ts";
import type { CreateUser } from "./types.ts";
import ApiError from "../../core/error/apiError.ts";

class UsersDataAccess {
   async getUsersList() {
      const users = await db.select().from(usersTable);
      return users;
   }

   async getUserByEmail(email: string) {
      const [user] = await db
         .select()
         .from(usersTable)
         .where(eq(usersTable.email, email));

      return user;
   }

   async createUser(data: CreateUser) {
      const [user] = await db
         .insert(usersTable)
         .values(data)
         .onConflictDoNothing({ target: usersTable.email })
         .returning();

      return user;
   }
   // async updateUser(data: UpdateUser, id: UserId) {
   //    const [updatedUser] = await db
   //       .update(usersTable)
   //       .set(data)
   //       .where(eq(usersTable.id, id))
   //       .returning();

   //    return updatedUser;
   // }
   // async partielUpdateUser(data: PartialUpdateUser, id: UserId) {
   //    const [updatedUser] = await db
   //       .update(usersTable)
   //       .set(data)
   //       .where(eq(usersTable.id, id))
   //       .returning();

   //    return updatedUser;
   // }
   // async deleteUser(id: UserId) {
   //    const [deletedUser] = await db
   //       .delete(usersTable)
   //       .where(eq(usersTable.id, id))
   //       .returning();

   //    return deletedUser;
   // }
}

export default UsersDataAccess;
