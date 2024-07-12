import Banner from "@/app/ui/components/banner/Banner.tsx";
import Divider from "@/app/ui/components/divider/Divider.tsx";
import Footer from "@/app/ui/components/footer/Footer.tsx";
import { MainContent } from "@/app/ui/showcase/mainContent/MainContent";

export default function Page({
	searchParams,
}: {
	searchParams?: {
		query?: "";
	};
}) {
	const searchQuery = searchParams?.query ?? "";
	return (
		<main>
			<Banner />
			<Divider />
			<MainContent searchQuery={searchQuery} />
			<Footer />
		</main>
	);
}
