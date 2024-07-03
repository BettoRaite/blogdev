import websiteLogo from "@/public/betto-blog-website-logo.png";
import Image from "next/image";
import { useState } from "react";
import SearchBar from "../searchBar/SearchBar.tsx";
import styles from "./navbar.module.css";

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

				<SearchBar />
			</nav>
		</div>
	);
}
export default Navbar;
