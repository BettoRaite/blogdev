import SearchBar from "./searchBar/SearchBar.tsx";
import styles from "./navbar.module.css";
import Image from "next/image";
import NavLinks from "./NavLinks";
// [+]: Add usePathname .

const pageLinks = [
	{ name: "Home", href: "/" },
	{
		name: "About",
		href: "/about",
	},
	{ name: "Contact", href: "/contact" },
];

function Navbar() {
	return (
		<div className={styles.navWrapper}>
			<nav className={styles.nav}>
				<h1 className={styles.websiteTitle}>BettoBlog</h1>

				<NavLinks layout="row" links={pageLinks} />
				<button className={styles.toggleSidebarButton}>
					<Image
						alt="toggle sidebar button icon"
						src={"/toggle-sidebar-button-icon.svg"}
						width={30}
						height={30}
					/>
				</button>
				<div className={styles.sidebarWrapper}>
					{/* <NavLinks layout="column" links={pageLinks} /> */}
				</div>

				<div className={styles.searchBarWrapper}>
					<SearchBar />
				</div>
			</nav>
		</div>
	);
}
export default Navbar;

/*
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
*/
