"use client";
import searchIcon from "@/public/search-icon.svg";
import Image from "next/image";
import { useContext, useState } from "react";
import styles from "./searchBar.module.css";

function SearchBar() {
	const [input, setInput] = useState("");
	const handleSubmit = (e: React.FormEvent) => {
		e.stopPropagation();
		e.preventDefault();
	};
	const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setInput(e.target.value);
	};
	return (
		<div className={`${styles.inputWrapper}`}>
			<input
				onChange={handleOnChange}
				className={styles.input}
				value={input}
				placeholder="Search"
				maxLength={255}
			/>
			<button
				onClick={handleSubmit}
				type="button"
				className={styles.searchButton}
			>
				<Image priority src={searchIcon} alt="search icon" />
			</button>
		</div>
	);
}

export default SearchBar;
