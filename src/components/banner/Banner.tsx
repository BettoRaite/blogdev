import styles from "./banner.module.css";
function Banner() {
	return (
		<section className={styles.banner}>
			<h1 className={styles.header}>
				The blog
				<br />
				<span className={styles.highlighted}>[about programming]</span>
			</h1>
			<div className={styles.cover} />
		</section>
	);
}
export default Banner;
