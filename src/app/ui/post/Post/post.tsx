import styles from "./post.module.css";

interface PostProps {
	title: string;
	content: string;
	author?: string;
	publicationDate?: string;
}

export function Post(props: PostProps) {
	const { title, content } = props;
	return (
		<section className={styles.article}>
			<h1>{title}</h1>
			<p>{content}</p>
		</section>
	);
}
