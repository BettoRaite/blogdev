import {
	pgTable,
	unique,
	pgEnum,
	serial,
	text,
	integer,
	timestamp,
	boolean,
} from "drizzle-orm/pg-core";

export const usersTable = pgTable(
	"users_table",
	{
		id: serial("id").primaryKey().notNull(),
		name: text("name").notNull(),
		email: text("email").notNull(),
	},
	(table) => {
		return {
			users_table_email_unique: unique("users_table_email_unique").on(
				table.email,
			),
		};
	},
);

export const postsTable = pgTable("posts_table", {
	id: serial("id").primaryKey().notNull(),
	title: text("title").notNull(),
	content: text("content").notNull(),
	user_id: integer("user_id")
		.notNull()
		.references(() => usersTable.id, { onDelete: "cascade" }),
	created_at: timestamp("created_at", { mode: "string" })
		.defaultNow()
		.notNull(),
	updated_at: timestamp("updated_at", { mode: "string" }).notNull(),
	is_published: boolean("is_published").default(false).notNull(),
});

export type InsertUser = typeof usersTable.$inferInsert;
export type SelectUser = typeof usersTable.$inferSelect;

export type InsertPost = typeof postsTable.$inferInsert;
export type SelectPost = typeof postsTable.$inferSelect;
