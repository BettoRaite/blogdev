import { Card } from "@/app/ui/showcase/card/Card.tsx";
import styles from "./cardsLayout.module.css";
import { PostWithAuthorName } from "@/lib/database/index.ts";

interface CardsLayoutProps {
	title?: string;
	postsData: PostWithAuthorName[];
}

export function CardsLayout({ title = "", postsData }: CardsLayoutProps) {
	const cards = postsData.map((postData) => {
		const url =
			"https://unsplash.com/photos/purple-and-white-heart-illustration-nY14Fs8pxT8";
		return (
			<Card
				key={postData.id}
				title={postData.title}
				authorName={postData.author_name}
				coverUrl={url}
				date={postData.created_at ?? ""}
				tags={[]}
				id={postData.id}
			/>
		);
	});
	return <section className={styles.layout}>{cards}</section>;
}
