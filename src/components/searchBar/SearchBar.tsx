"use client";

import { searchQueryContext } from "@/app/page.tsx";
import searchIcon from "@/public/search-icon.svg";
import Image from "next/image";
import { useContext, useState } from "react";
import styles from "./searchBar.module.css";

function SearchBar() {
	const [input, setInput] = useState("");

	const context = useContext(searchQueryContext);
	if (context === null) {
		console.warn(
			"No searchQueryContext provided. The search bar won't be able to share input data, hence turned off.",
		);
	}
	const { setSearchQuery } = context ?? {};
	const isSearchBarDisabled = !setSearchQuery;

	const handleSubmit = (e: React.FormEvent) => {
		e.stopPropagation();
		e.preventDefault();
		setSearchQuery?.(input);
	};
	const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setInput(e.target.value);
	};
	return (
		<div
			className={`${styles.inputWrapper} ${isSearchBarDisabled && styles.searchBarDisabled}`}
		>
			<input
				onChange={handleOnChange}
				className={styles.input}
				value={isSearchBarDisabled ? "" : input}
				placeholder="Search"
				maxLength={255}
			/>
			<button
				onClick={handleSubmit}
				type="button"
				disabled={isSearchBarDisabled}
				className={styles.searchButton}
			>
				<Image priority src={searchIcon} alt="search icon" />
			</button>
		</div>
	);
}

export default SearchBar;
