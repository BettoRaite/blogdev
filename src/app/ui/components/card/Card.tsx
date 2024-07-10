import type { CardData } from "@/models/cardData.schema.ts";
import { joinClassNames } from "@/lib/utils/strings";
import styles from "./card.module.css";

const getPublicationDate = (date: Date) => {
	const day = date.getDate();
	const monthIndex = date.getMonth();
	const monthIndexToMonth = [
		"January",
		"February",
		"March",
		"April",
		"May",
		"June",
		"July",
		"August",
		"September",
		"October",
		"November",
		"December",
	];
	const year = date.getFullYear();
	return `${monthIndexToMonth[monthIndex]} ${day}, ${year}`;
};

function Card(cardData: CardData) {
	const {
		title,
		coverUrl,
		author,
		date = new Date(),
		tags = [],
		id,
	} = cardData;
	const publicationDate = getPublicationDate(date);

	const pic =
		"https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
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
							BettoRaite
						</p>
					</div>
					<p className={styles.publicationDate}>{publicationDate}</p>
				</div>
			</div>
			<a className={styles.readMore} href={`/blog/${id}`}>
				Read more...
			</a>
		</section>
	);
}

export default Card;
