import styles from "./newsletter.module.css";
function Newsletter() {
	return (
		<form className={styles.newsletter}>
			<h5>Monthly newsletter</h5>
			<p>Get blog articles and offers via email</p>
			<input />
			<button type="submit">Subscribe</button>
		</form>
	);
}
export default Newsletter;
