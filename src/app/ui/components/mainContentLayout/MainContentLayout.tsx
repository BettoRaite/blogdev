import { CardsLayout } from "../cardsLayout/CardsLayout.tsx";
import styles from "./mainContentLayout.module.css";
import { getPosts } from "@/lib/database/index.ts";
import { InsertPost } from "@/lib/database/schema/schema.ts";

export async function MainContentLayout() {
	let postsData: InsertPost[] = [];

	try {
		const postsData = await getPosts();
	} catch {
		console.log("error");
	}
	return (
		<section className={styles.layout}>
			<h1 className={styles.heading}>Latest post</h1>
			<CardsLayout title="Recent posts" postsData={postsData} />
		</section>
	);
}
