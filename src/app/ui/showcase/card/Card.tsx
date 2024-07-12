import { joinClassNames } from "@/utils/strings.ts";
import { getPublicationDate } from "@/lib/helpers/strings.ts";
import styles from "./card.module.css";
import Link from "next/link";

interface CardProps {
	title: string;
	coverUrl: string;
	authorName: string;
	date: string;
	tags: string[];
	id: number;
}

export function Card(cardData: CardProps) {
	const { title, coverUrl, authorName, date, tags = [], id } = cardData;

	const pic =
		"https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
	const publicationDate = getPublicationDate(new Date(date));

	return (
		<section className={styles.card}>
			<div className={styles.coverWrapper}>
				<img className={styles.coverImage} src={pic} alt="Post cover" />
			</div>
			<div className={styles.descriptionLayout}>
				<div className={styles.descriptionHeading}>
					<div className={styles.badges}>{...tags}</div>
					<h1 className={joinClassNames(styles.title, styles.baseFont)}>
						{title}
					</h1>
				</div>
				<div className={styles.publicationDescription}>
					<div className={styles.authorInfo}>
						<img className={styles.authorPic} src={pic} alt="" />
						<p className={joinClassNames(styles.authorName, styles.baseFont)}>
							{authorName}
						</p>
					</div>
					<p className={styles.publicationDate}>{publicationDate}</p>
				</div>
			</div>
			<Link className={styles.readMore} href={`/blog/${id}`}>
				Read more...
			</Link>
		</section>
	);
}
