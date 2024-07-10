import "dotenv/config";
import { SelectPost } from "./schema/schema";
import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import { posts_table } from "./schema/schema";

const connectionString = process.env.DATABASE_URL ?? "";

export const client = postgres(connectionString, { prepare: false });
export const db = drizzle(client);

export async function getPosts(): Promise<SelectPost[]> {
	return db.select().from(posts_table);
}
