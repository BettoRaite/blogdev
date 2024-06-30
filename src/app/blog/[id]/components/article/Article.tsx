import styles from "./article.module.css";

function Article(props: {
	title: string;
	content: string;
	author?: string;
	publicationDate?: string;
}) {
	return (
		<section className={styles.article}>
			<h1>Title is : {props.title}</h1>
			<p>{props.content}</p>
		</section>
	);
}
export default Article;
