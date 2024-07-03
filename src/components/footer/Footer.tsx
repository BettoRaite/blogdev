import HorizontalNav from "../horizontalNav/HorizontalNav";
import Newsletter from "../newsletter/Newsletter.tsx";
import styles from "./footer.module.css";

function Footer() {
	return (
		<footer className={styles.footer}>
			<section className={styles.mainContent}>
				<div className={styles.about}>
					<h2 className={styles.aboutTitle}>About</h2>
					<p className={styles.aboutDescription}>
						Bettoblog is a place where I share my thoughts on life and all.
						<br />
					</p>
					<div className={styles.authorContact}>
						<p className={styles.email}>
							<span style={{ fontWeight: "bold" }}>Email&nbsp;:</span>
							&nbsp;bettoraite@gmail.com
						</p>
					</div>
				</div>
				<section className={styles.footerNav}>
					<HorizontalNav
						title="Quick links"
						items={[
							{ label: "Home", link: "/" },
							{ label: "Blog", link: "/blog" },
							{ label: "About", link: "/about" },
							{ label: "Contact", link: "/contact" },
							{ label: "Archived", link: "/archived" },
						]}
					/>
					<HorizontalNav
						title="Categories"
						items={[
							{ label: "Tech", link: "/blog?category=tech" },
							{ label: "Life", link: "/blog?category=life" },
							{ label: "Languages", link: "/blog?category=languages" },
						]}
					/>
				</section>

				<Newsletter />
			</section>
			<section className={styles.copyrightWrapper}>
				<div className={styles.copyright}>
					<p className={styles.websiteTitle}>BettoBlog</p>
					<p className={styles.websiteTitle}>
						© BettoRaite 2024. All Rights Reserved.
					</p>
				</div>
				<ul className={styles.copyrightList}>
					<li className={styles.copyrightListItem}>
						<a className="nav__link--default" href="">
							Terms of use
						</a>
					</li>
					<li className={styles.copyrightListItem}>
						<a className="nav__link--default" href="">
							Privacy policy
						</a>
					</li>
					<li className={styles.copyrightListItem}>
						<a className="nav__link--default" href="">
							Cookie policy
						</a>
					</li>
				</ul>
			</section>
		</footer>
	);
}

export default Footer;
