import { StyledListItem } from "../components/ListItem";
import { getAllSortedPostsData } from "@/lib/getAllSortedPosts";

export default function AllPosts() {
	const allposts = getAllSortedPostsData();

	return (
		<main className='flex min-h-screen flex-col items-center justify-between p-24'>
			<h1 className='text-8xl font-extrabold text-center text-red-700'>
				All My Posts
			</h1>
			<div className='flex flex-col gap-2 m-4 p-4 mx-auto w-10/12 rounded bg-slate-200'>
				<ul className="mb-12 mx-auto">
					{allposts.map((allpost) => (
						<StyledListItem
							key={allpost.id}
							post={allpost}
						/>
					))}
				</ul>
			</div>
		</main>
	);
}

//max-w-2xl