import {
	pgTable,
	unique,
	pgEnum,
	serial,
	text,
	foreignKey,
	integer,
	timestamp,
	boolean,
} from "drizzle-orm/pg-core";
import { sql } from "drizzle-orm";

export const aal_level = pgEnum("aal_level", ["aal1", "aal2", "aal3"]);
export const code_challenge_method = pgEnum("code_challenge_method", [
	"s256",
	"plain",
]);
export const factor_status = pgEnum("factor_status", [
	"unverified",
	"verified",
]);
export const factor_type = pgEnum("factor_type", ["totp", "webauthn"]);
export const one_time_token_type = pgEnum("one_time_token_type", [
	"confirmation_token",
	"reauthentication_token",
	"recovery_token",
	"email_change_token_new",
	"email_change_token_current",
	"phone_change_token",
]);
export const key_status = pgEnum("key_status", [
	"default",
	"valid",
	"invalid",
	"expired",
]);
export const key_type = pgEnum("key_type", [
	"aead-ietf",
	"aead-det",
	"hmacsha512",
	"hmacsha256",
	"auth",
	"shorthash",
	"generichash",
	"kdf",
	"secretbox",
	"secretstream",
	"stream_xchacha20",
]);
export const action = pgEnum("action", [
	"INSERT",
	"UPDATE",
	"DELETE",
	"TRUNCATE",
	"ERROR",
]);
export const equality_op = pgEnum("equality_op", [
	"eq",
	"neq",
	"lt",
	"lte",
	"gt",
	"gte",
	"in",
]);

export const users_table = pgTable(
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

export const posts_table = pgTable("posts_table", {
	id: serial("id").primaryKey().notNull(),
	title: text("title").notNull(),
	content: text("content").notNull(),
	user_id: integer("user_id")
		.notNull()
		.references(() => users_table.id, { onDelete: "cascade" }),
	created_at: timestamp("created_at", { mode: "string" })
		.defaultNow()
		.notNull(),
	updated_at: timestamp("updated_at", { mode: "string" }).notNull(),
	is_published: boolean("is_published").default(false).notNull(),
});

export type InsertUser = typeof users_table.$inferInsert;
export type SelectUser = typeof users_table.$inferSelect;
export type InsertPost = typeof posts_table.$inferInsert;
export type SelectPost = typeof posts_table.$inferSelect;
