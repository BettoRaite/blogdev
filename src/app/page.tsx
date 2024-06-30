"use client";

import Banner from "@/components/banner/Banner.tsx";
import Footer from "@/components/footer/Footer.tsx";
import MainContentLayout from "@/components/mainContentLayout/MainContentLayout.tsx";
import Navbar from "@/components/navbar/Navbar.tsx";
import { createContext, useState } from "react";
import styles from "./page.module.css";

export const searchQueryContext = createContext<null | {
	searchQuery: string;
	setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
}>(null);

function Home() {
	const [searchQuery, setSearchQuery] = useState("");
	return (
		<main>
			<searchQueryContext.Provider value={{ searchQuery, setSearchQuery }}>
				<Navbar />
				<Banner />
				<MainContentLayout />
			</searchQueryContext.Provider>
			<Footer />
		</main>
	);
}
export default Home;
