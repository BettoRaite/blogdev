import styles from "./article.module.css";

function Article(props: {
	title: string;
	content: string;
	author?: string;
	publicationDate?: string;
}) {
	const { title, content } = props;
	return (
		<section className={styles.article}>
			<h1>{title}</h1>
			<p>{content}</p>
		</section>
	);
}
export default Article;
