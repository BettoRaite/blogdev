import Navbar from "@/app/ui/navbar/Navbar";
import MainContentLayout from "@/app/ui/blog/components/MainContentLayout/MainContentLayout.tsx";

export default function Page({ params }: { params: { id: string } }) {
	const { id } = params;

	return (
		<>
			<Navbar />
			<MainContentLayout id={id} />
		</>
	);
}
