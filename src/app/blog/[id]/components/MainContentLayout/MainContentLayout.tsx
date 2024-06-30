"use client";
import useFetch from "@/hooks/useFetch.ts";
import { useEffect, useState } from "react";
import Article from "../article/Article.tsx";

function MainContentLayout({ id = "0" }) {
	const { data, error, isLoading } = useFetch(
		`http://localhost:8080/api/v1/post/${id}`,
	);
	const [articleData, setArticleData] = useState({});

	useEffect(() => {
		if (data) {
			setArticleData({
				author: data.author,
				title: data.title,
				content: data.content,
				publicationDate: data.createdAt,
			}); 
		}
	}, [data]);
	console.log(articleData);
	const article = (
		<Article
			content={articleData.content}
			author={articleData.author}
			title={articleData.title}
		/>
	);
	return <>{article}</>;
}
export default MainContentLayout;
