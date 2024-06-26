import type { CardData } from "@/models/cardData.schema.ts";
import styles from "./card.module.css";

function getPublicationDate(date: Date) {
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
}
function Card(cardData: CardData) {
	const { title, coverUrl, author, date = new Date(), tags = [] } = cardData;
	const publicationDate = getPublicationDate(date);
	const pic =
		"https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
	return (
		<section className={styles.cardBody}>
			<div className={styles.coverWrapper}>
				<img className={styles.coverImage} src={pic} alt="Post cover" />
			</div>
			<div className={styles.contentWrapper}>
				<div className={styles.heading}>
					<div className={styles.badges}>{...tags}</div>
					<h1 className={styles.title}>{title}</h1>
				</div>
				<div className={styles.info}>
					<div className={styles.author}>
						<img className={styles.authorPic} src={pic} alt="" />
						<p className={styles.authorName}>BettoRaite</p>
					</div>
					<div className={styles.publicationDate}>{publicationDate}</div>
				</div>
			</div>
		</section>
	);
}

export default Card;
