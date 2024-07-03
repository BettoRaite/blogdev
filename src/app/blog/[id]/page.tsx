import Navbar from "@/components/navbar/Navbar.tsx";
import MainContentLayout from "./components/MainContentLayout/MainContentLayout.tsx";

export default function Page({ params }: { params: { id: string } }) {
	const { id } = params;

	return (
		<>
			<Navbar />
			<MainContentLayout id={id} />
		</>
	);
}
