import Navbar from "@/app/ui/navbar/Navbar";
import { MainContent } from "@/app/ui/post/MainContent/MainContent.tsx";

export default function Page({ params }: { params: { id: string } }) {
	const { id } = params;
	return (
		<>
			<MainContent id={id} />
		</>
	);
}
