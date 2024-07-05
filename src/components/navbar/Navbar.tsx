import SearchBar from "../searchBar/SearchBar.tsx";
import styles from "./navbar.module.css";
import { useState } from "react";
import Image from "next/image";

// [-]: REMOVE THIS.
const mediaQuery = window.matchMedia("(width <= 100px)");
const handleScreenChange = (e: MediaQueryListEvent) => {
	if (e.matches) {
	}
};
mediaQuery.addEventListener("change", handleScreenChange);

function Navbar() {
	return (
		<div className={styles.navWrapper}>
			<nav className={styles.nav}>
				<h1 className={styles.websiteTitle}>BettoBlog</h1>

				<ul className={styles.navList}>
					<li className="nav__list-item--default">
						<a className="nav__link--default" href="/home">
							Home
						</a>
					</li>
					<li className="nav__list-item--default">
						<a className="nav__link--default" href="/about">
							About
						</a>
					</li>
					<li className="nav__list-item--default">
						<a className="nav__link--default" href="/contact">
							Contact
						</a>
					</li>
				</ul>
				<button className={styles.toggleSidebarButton}>
					<Image
						alt="toggle sidebar button icon"
						src={"/toggle-sidebar-button-icon.svg"}
						width={30}
						height={30}
					/>
				</button>
				<div className={styles.sidebarWrapper}>
					<ul className={styles.sidebar}>
						<li className="nav__list-item--default">
							<a className="nav__link--default" href="/home">
								Home
							</a>
						</li>
						<li className="nav__list-item--default">
							<a className="nav__link--default" href="/about">
								About
							</a>
						</li>
						<li className="nav__list-item--default">
							<a className="nav__link--default" href="/contact">
								Contact
							</a>
						</li>
					</ul>
				</div>

				<div className={styles.searchBarWrapper}>
					<SearchBar />
				</div>
			</nav>
		</div>
	);
}
export default Navbar;
