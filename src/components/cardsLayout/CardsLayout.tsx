"use client";

import { searchQueryContext } from "@/app/page.tsx";
import useFetch from "@/hooks/useFetch.ts";
import { useEffect, useState } from "react";
import { useContext } from "react";
import Card from "../card/Card.tsx";
import styles from "./cardsLayout.module.css";

function CardsLayout() {
	const context = useContext(searchQueryContext);
	if (context === null) {
		throw new TypeError(
			"No searchQueryContext provided. Parent must wrap the CardsLayout component into searchQueryContext.",
		);
	}

	const { searchQuery } = context;
	const [postsData, setPostsData] = useState([]);
	const { data, error, isLoading } = useFetch(
		"http://localhost:8080/api/v1/posts",
	);

	useEffect(() => {
		if (!data) {
			return;
		}
		const extractedData = [];
		for (const entry of data) {
			const id = entry.id;
			const title = entry.title;
			const date = entry.created_at;
			if (searchQuery) {
				if (!title.includes(searchQuery)) {
					continue;
				}
			}
			const postData = {
				id,
				title,
				date,
			};
			extractedData.push(postData);
		}
		setPostsData(extractedData);
	}, [data, searchQuery]);

	const cards = postsData.map((postData) => {
		const url =
			"https://unsplash.com/photos/purple-and-white-heart-illustration-nY14Fs8pxT8";
		return (
			<Card
				key={postData.id}
				title={postData.title}
				author="bettoraite"
				coverUrl={url}
				date={new Date()}
				tags={[]}
				id={postData.id}
			/>
		);
	});
	return (
		<section className={styles.layout}>
			{isLoading ? "Loading" : error ? "Empty" : cards}
		</section>
	);
}

export default CardsLayout;
