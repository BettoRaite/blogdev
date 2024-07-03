"use client";

import useFetch from "@/hooks/useFetch.ts";
import { useEffect, useState } from "react";
import Article from "../article/Article.tsx";

function MainContentLayout({ id = "0" }) {
	const { data, error, isLoading } = useFetch(
		`http://localhost:8080/api/v1/post/${id}`,
	);
	const [articleData, setArticleData] = useState({
		author: "",
		title: "",
		content: "",
		publicationDate: "",
	});

	useEffect(() => {
		const articleData = data?.[0];
		if (articleData) {
			setArticleData({
				author: articleData.author,
				title: articleData.title,
				content: articleData.content,
				publicationDate: articleData.createdAt,
			});
		}
	}, [data]);

	return (
		<main>
			{isLoading ? (
				"Loading"
			) : error ? (
				"Error"
			) : data ? (
				<Article
					content={articleData.content}
					author={articleData.author}
					title={articleData.title}
				/>
			) : null}
		</main>
	);
}

export default MainContentLayout;
