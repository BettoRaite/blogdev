import Image from "next/image";
import styles from "./about.module.css";

export async function About() {
	const fallbackAboutText = `
Hi, I'm BettoRaite the creator of this website.
Glad to see ya here!    
`;
	const user = "bettoraite";
	let aboutText = "";
	let userAvatarUrl = "";

	try {
		const result = await fetch(`https://api.github.com/users/${user}`);
		if (result.ok) {
			const user = await result.json();
			aboutText = user.bio;
			userAvatarUrl = user.avatar_url;
		}
	} catch (error) {
		console.error("Error fetching github data:", error);
		aboutText = fallbackAboutText;
	}
	return (
		<section className={styles.layout}>
			<h1 className={styles.headline}>About me</h1>
			<div className={styles.aboutDescription}>
				<Image
					className={styles.githubAvatar}
					width={50}
					height={50}
					src={userAvatarUrl}
					alt="github picture of bettoraite"
				/>
				<>
					<p className={styles.aboutText}>{aboutText}</p>
				</>
			</div>
		</section>
	);
}
