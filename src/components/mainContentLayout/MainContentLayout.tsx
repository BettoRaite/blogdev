import CardsLayout from "../cardsLayout/CardsLayout.tsx";
import styles from "./mainContentLayout.module.css";
function MainContentLayout() {
	return (
		<section className={styles.layout}>
			<h1 className={styles.heading}>Latest post</h1>
			<CardsLayout />
		</section>
	);
}
export default MainContentLayout;
