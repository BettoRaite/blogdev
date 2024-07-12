import "dotenv/config";
import { SelectPost, postsTable, SelectUser, usersTable } from "./schema.ts";
import { drizzle } from "drizzle-orm/postgres-js";
import { eq, sql } from "drizzle-orm";
import postgres from "postgres";

const connectionString = process.env.DATABASE_URL ?? "";

export const client = postgres(connectionString, { prepare: false });
export const db = drizzle(client);

export type PostWithAuthorName = SelectPost & {
	author_name: SelectUser["name"];
};

export async function getPosts(): Promise<PostWithAuthorName[]> {
	const query = sql`
    SELECT ${postsTable}.*, ${usersTable.name} AS author_name
    FROM ${postsTable}
    INNER JOIN ${usersTable} ON ${postsTable.user_id} = ${usersTable.id};
  `;
	return db.execute(query);
}

export async function getPostsByTitle(
	postTitle: string,
): Promise<PostWithAuthorName[]> {
	const postTitleLower = `%${postTitle.toLowerCase()}%`;
	const query = sql`
    SELECT ${postsTable}.*, ${usersTable.name} AS author_name
    FROM ${postsTable} 
    INNER JOIN ${usersTable} ON ${postsTable.user_id} = ${usersTable.id}
	WHERE LOWER(${postsTable.title}) LIKE ${postTitleLower};	
	`;
	return db.execute(query);
}

export async function getUsers(): Promise<SelectUser[]> {
	return db.select().from(usersTable);
}

export async function getPostById(id: number): Promise<SelectPost> {
	const posts = await db.select().from(postsTable).where(eq(postsTable.id, id));
	return posts[0];
}
