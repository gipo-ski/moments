import Link from "next/link";

import getFormatedDate from "@/lib/getFormatedDate";

type Props = {
	post: BlogPost;
};

export default function ListItem({ post }: Props) {
	const { id, title, date } = post;
	const formatedDate = getFormatedDate(date);
	
	return (
		<li className='mt-4 text-2xl dark:text-white/90'>
			<Link
				href={`/posts/${id}`}
				className='underline hover:text-black/70 dark:hover:text-white'
			>
				{title}
			</Link>
			{/* ListItem */}
			<p className='text-sm mt-1'>{formatedDate}</p>
		</li>
	);
}

export function StyledListItem({ post }: Props) {
	const { id, title, date } = post;
	const formatedDate = getFormatedDate(date);

	return (
		<li className='mt-1 dark:text-white/90'>
			<Link
				href={`/posts/${id}`}
				className='underline hover:text-black/70 dark:hover:text-white p-4'
			>
				<h2 className='text-2xl font-extrabold'>{title}</h2>
			</Link>
			{/* ListItem */}
			<p className='text-sm mt-0'>{formatedDate}</p>
		</li>
	);
}

