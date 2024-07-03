import type { PropsWithChildren } from "react";
import styles from "./horizontalNav.module.css";

interface NavItem {
	label: string;
	link: string;
}
interface HorizontalNavProps {
	items: NavItem[];
	title: string;
	titleFontSizePX?: number;
	titleMarginBottomPX?: number;
	navListItemPaddingPX?: number;
}

const defaultProps: Partial<HorizontalNavProps> = {
	titleFontSizePX: 18,
	titleMarginBottomPX: 20,
	navListItemPaddingPX: 6,
};

function HorizontalNav({
	items,
	title,
	titleFontSizePX = defaultProps.titleFontSizePX,
	titleMarginBottomPX = defaultProps.titleMarginBottomPX,
	navListItemPaddingPX = defaultProps.navListItemPaddingPX,
}: PropsWithChildren<HorizontalNavProps>) {
	const listItems = items.map(({ label, link }) => {
		return (
			<li
				className="nav__list-item--default"
				style={{ padding: `${navListItemPaddingPX}px` }}
			>
				<a className="nav__link--default" href={link}>
					{label}
				</a>
			</li>
		);
	});
	return (
		<nav className={styles.nav} aria-label="Horizontal navigation">
			<h3
				className={styles.title}
				style={{
					fontSize: `${titleFontSizePX}px`,
					marginBottom: `${titleMarginBottomPX}px`,
					marginLeft: `${navListItemPaddingPX}px`,
				}}
			>
				{title}
			</h3>
			<ul className={styles.navList}>{listItems}</ul>
		</nav>
	);
}

export default HorizontalNav;
