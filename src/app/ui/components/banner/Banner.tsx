import styles from "./banner.module.css";
import Image from "next/image";
function Banner() {
	return (
		<section className={styles.banner}>
			<h1 className={styles.header}>
				BettoBlog
				<br />
				<span className={styles.highlighted}>From programming to my life.</span>
			</h1>
			<Image
				className={styles.cover}
				src="/banner.jpg"
				width={1100}
				height={760}
				alt="Banner of a red flower on dark background"
			/>
		</section>
	);
}
export default Banner;
