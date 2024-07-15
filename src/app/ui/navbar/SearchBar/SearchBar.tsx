"use client";
import searchIcon from "@/public/search-icon.svg";
import Image from "next/image";
import styles from "./searchBar.module.css";
import { useRef } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

function SearchBar() {
	const inputRef = useRef<HTMLInputElement>(null);
	const searchParams = useSearchParams();

	const pathname = usePathname();
	const { replace } = useRouter();

	function handleClickSearch() {
		const term = inputRef.current?.value;
		const searchQuery = new URLSearchParams(searchParams);
		if (term) {
			searchQuery.set("query", term);
			replace(`${pathname}?${searchQuery.toString()}`);
		} else {
			searchQuery.set("query", "");
			replace(`${pathname}`);
		}
	}
	return (
		<div className={`${styles.inputWrapper}`}>
			<input
				ref={inputRef}
				className={styles.input}
				placeholder="Search"
				maxLength={255}
				defaultValue={searchParams.get("query") ?? ""}
			/>
			<button
				onClick={handleClickSearch}
				type="button"
				className={styles.searchButton}
			>
				<Image priority src={searchIcon} alt="search icon" />
			</button>
		</div>
	);
}

export default SearchBar;
