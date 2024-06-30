import websiteLogo from "@/public/betto-blog-website-logo.png";
import Image from "next/image";
import { useState } from "react";
import SearchBar from "../searchBar/SearchBar.tsx";
import styles from "./navbar.module.css";

function Navbar() {
	return (
		<div className={styles.navbarWrapper}>
			<nav className={styles.navbar}>
				<h1 className={styles.websiteTitle}>BettoBlog</h1>

				<ul className={styles.linksMenu}>
					<li className={styles.linksMenuItem}>
						<a className={styles.menuLink} href="/home">
							Home
						</a>
					</li>
					<li className={styles.linksMenuItem}>
						<a className={styles.menuLink} href="/about">
							About
						</a>
					</li>
					<li className={styles.linksMenuItem}>
						<a className={styles.menuLink} href="/contact">
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
