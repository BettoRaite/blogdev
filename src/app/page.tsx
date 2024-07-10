import Banner from "@/app/ui/components/banner/Banner.tsx";
import Divider from "@/app/ui/components/divider/Divider.tsx";
import Footer from "@/app/ui/components/footer/Footer.tsx";
import { MainContentLayout } from "@/app/ui/components/mainContentLayout/MainContentLayout.tsx";

export default function Page() {
	return (
		<main>
			<Banner />
			<Divider />
			<MainContentLayout />
			<Footer />
		</main>
	);
}
