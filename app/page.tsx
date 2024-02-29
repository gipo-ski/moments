import Image from "next/image";

import Posts from "./components/Posts";
import logo from "../public/images/giposki-logo.png";

export default function Home() {
	return (
		<main className='flex min-h-screen flex-col items-center justify-between p-24'>
			<Image
				src={logo}
				alt='gioskilogo'
				width={200}
				priority={true}
				className='shadow-xl hover:shadow-2xl cursor-pointer '
			></Image>
			<h1 className='text-8xl text-red-800 font-bold'>HomePage</h1>
			<p className='text-2xl text-slate-800 text-center'>
				Welcome to my BlogPosts.
			</p>
			<Posts />
		</main>
	);
}
