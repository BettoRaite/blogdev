import HorizontalNav from "../horizontalNav/HorizontalNav";
import Newsletter from "../newsletter/Newsletter.tsx";
import styles from "./footer.module.css";

function Footer() {
	return (
		<footer className={styles.footer}>
			<section className={styles.footerContentWrapper}>
				<section className={styles.about}>
					<h2 className={styles.aboutTitle}>About</h2>
					<p className={styles.aboutDescription}>
						Bettoblog is a place where I share my thoughts on life and all.
					</p>
					<div className={styles.aboutContact}>
						<p className={styles.email}>
							<span style={{ fontWeight: "bold" }}>Email:</span>
							<a href="mailto:bettoraite@gmail.com">&nbsp;bettoraite@gmail.com</a>
						</p>
					</div>
				</section>
				<section className={styles.navsContainer}>
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
				{/* <Newsletter /> */}
			</section>
			<section className={styles.copyrightWrapper}>
				<div className={styles.copyright}>
					<p className={styles.websiteTitle}>BettoBlog</p>
					<p className={styles.copyrightText}>
						© BettoRaite 2024. All Rights Reserved.
					</p>
				</div>
				<ul className={styles.copyrightLinks}>
					<li className={styles.copyrightLinksItem}>
						<a className="nav__link--default" href="/terms-of-use">
							Terms of use
						</a>
					</li>
					<li className={styles.copyrightLinksItem}>
						<a className="nav__link--default" href="/privacy-policy">
							Privacy policy
						</a>
					</li>
					<li className={styles.copyrightLinksItem}>
						<a className="nav__link--default" href="/cookie-policy">
							Cookie policy
						</a>
					</li>
				</ul>
			</section>
		</footer>
	);
}

export default Footer;
