import {
   integer,
   pgTable,
   text,
   timestamp,
   varchar,
} from "drizzle-orm/pg-core";

export const usersTable = pgTable("users", {
   id: integer().primaryKey().generatedAlwaysAsIdentity(),
   email: varchar({ length: 255 }).notNull().unique(),
   passwordHash: varchar("password_hash", { length: 255 }).notNull(),
   role: varchar({ length: 255 }).notNull().default("user"),
   // createdAt: timestamp("created_at").defaultNow().notNull(),

   // username: varchar({ length: 255 }).unique(),
   // name: varchar({ length: 40 }),
   // lastName: varchar("last_name", { length: 40 }),
   // address: text(),
});
