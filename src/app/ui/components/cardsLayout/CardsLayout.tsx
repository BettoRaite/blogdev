"use client";
import useFetch from "@/hooks/useFetch.ts";
import { useEffect, useState } from "react";
import Card from "../card/Card.tsx";
import styles from "./cardsLayout.module.css";
import { InsertPost } from "@/lib/database/schema/schema.ts";

interface CardsLayoutProps {
	title?: string;
	postsData: InsertPost[];
}

export function CardsLayout({ title = "", postsData }: CardsLayoutProps) {
	const cards = postsData.map((postData) => {
		const url =
			"https://unsplash.com/photos/purple-and-white-heart-illustration-nY14Fs8pxT8";
		return (
			<Card
				key={postData.id}
				title={postData.title}
				author="bettoraite"
				coverUrl={url}
				date={postData.created_at}
				tags={[]}
				id={postData.id}
			/>
		);
	});
	return <section className={styles.layout}>{cards}</section>;
}
