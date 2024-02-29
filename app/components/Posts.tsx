import { getAllSortedPostsData } from "@/lib/getAllSortedPosts";
import ListItem from "./ListItem";

export default function Posts() {
	const posts = getAllSortedPostsData();
	return (
		<section className='mx-auto max-w-2xl bg-slate-200 mt-10 p-4 rounded'>
			<h1 className='text-4xl font-bold dark:text-white/90'>All My Posts</h1>
			<ul className='w-full pb-24'>
				{posts.map((post) => (
					<ListItem
						key={post.id}
						post={post}
					/>
				))}
			</ul>
		</section>
	);
}
