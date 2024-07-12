import { CardsLayout } from "@/app/ui/showcase/cardsLayout/CardsLayout.tsx";
import styles from "./mainContent.module.css";
import {
	getPosts,
	PostWithAuthorName,
	getPostsByTitle,
} from "@/lib/database/index.ts";
import { SelectPost, SelectUser } from "@/lib/database/schema.ts";

interface MainContentProps {
	searchQuery: string;
}
export async function MainContent({ searchQuery }: MainContentProps) {
	let postsData: PostWithAuthorName[] = [];
	try {
		if (typeof searchQuery === "string") {
			postsData = await getPostsByTitle(searchQuery);
		} else {
			postsData = await getPosts();
		}
		console.log(postsData);
	} catch (error) {
		console.log(error);
	}
	return (
		<section className={styles.layout}>
			<h1 className={styles.heading}>Latest query</h1>
			<CardsLayout title="Recent posts" postsData={postsData} />
		</section>
	);
}
