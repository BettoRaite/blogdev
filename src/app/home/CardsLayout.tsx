"use client";
import useFetch from "@/hooks/useFetch.ts";
import { useEffect, useState } from "react";
import Card from "./Card.tsx";
import styles from "./cardsLayout.module.css";

function CardsLayout() {
	const [postsData, setPostsData] = useState([]);
	const { data, error, isLoading } = useFetch(
		"http://localhost:8080/api/v1/posts",
	);

	useEffect(() => {
		/*
        
		content: "Py is.tras+h ... I run.";
		created_at: "2024-06-24T12:36:09.642Z";
		is_published: false;
		post_id: 6;
		tags: [];
		title: "How can you save the world?";
		updated_at: "2024-06-24T12:36:09.642Z";
        
        */
		if (!data) {
			return;
		}
		const extractedData = [];
		for (const entry of data) {
			const postData = {
				postId: entry.post_id,
				title: entry.title,
				date: entry.created_at,
			};
			extractedData.push(postData);
		}
		setPostsData(extractedData);
	}, [data]);

	const cards = postsData.map((postData) => {
		const url =
			"https://unsplash.com/photos/purple-and-white-heart-illustration-nY14Fs8pxT8";
		console.log(postData.postId);
		return (
			<Card
				key={postData.postId}
				title={postData.title}
				author="bettoraite"
				coverUrl={url}
				date={new Date()}
				tags={[]}
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
