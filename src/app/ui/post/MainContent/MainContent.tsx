import { getPostById } from "@/lib/database/index.ts";
import { SelectPost } from "@/lib/database/schema.ts";
import { Post } from "../Post/post.tsx";
export async function MainContent({ id = "0" }) {
	const postData: SelectPost = await getPostById(Number(id));
	await new Promise((resolve) => {
		setTimeout(() => {
			resolve(0);
		}, 5000);
	});
	return (
		<main>
			<Post
				content={postData.content}
				title={postData.title}
				author="bettoraite"
				publicationDate={postData.created_at}
			/>
		</main>
	);
}
