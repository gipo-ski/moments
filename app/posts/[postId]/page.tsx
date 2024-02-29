import Link from "next/link";

import NotFound from "./not-found";
import getFormatedDate from "@/lib/getFormatedDate";
import { getAllSortedPostsData, getPostData } from "@/lib/getAllSortedPosts";

export function generateStaticParams() {
	const posts = getAllSortedPostsData();

	return posts.map((post) => ({
		postId: post.id,
	}));
}

export function generateMetadata({ params }: { params: { postId: string } }) {
	const posts = getAllSortedPostsData();
	const { postId } = params;

	const post = posts.find((post) => post.id === postId);

	if (!post) {
		return {
			title: "Post Not Found",
		};
	}

	return {
		title: post.title,
	};
}

export default async function Post({ params }: { params: { postId: string } }) {
	const posts = getAllSortedPostsData();
	const { postId } = params;

	if (!posts.find((post) => post.id === postId)) NotFound();

	const { title, date, contentHtml } = await getPostData(postId);
	const formatedPublicationDate = getFormatedDate(date);

	return (
		<main className='px-6 prose prose-xl prose-slate dark:prose-invert mx-auto'>
			<h1 className='text-3xl mt-4 mb-0'>{title}</h1>
			<p className='mt-0'>{formatedPublicationDate}</p>
			<article>
				<section dangerouslySetInnerHTML={{ __html: contentHtml }} />
				<p>
					<Link href='/allposts'>Back to All Posts</Link>
				</p>
				<p>
					<Link href='/'>Back to Home</Link>
				</p>
			</article>
		</main>
	);
}
