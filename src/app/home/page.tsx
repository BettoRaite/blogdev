import CardsLayout from "./CardsLayout.tsx";
import styles from "./page.module.css";

export default function Home() {
	return (
		<main className={styles.main}>
			<CardsLayout />
		</main>
	);
}
