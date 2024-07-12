import { relations } from "drizzle-orm/relations";
import { usersTable, postsTable } from "./schema";

export const posts_tableRelations = relations(postsTable, ({ one }) => ({
	users_table: one(usersTable, {
		fields: [postsTable.user_id],
		references: [usersTable.id],
	}),
}));

export const users_tableRelations = relations(usersTable, ({ many }) => ({
	posts_tables: many(postsTable),
}));
