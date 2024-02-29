import Link from "next/link";
import { FaYoutube, FaTwitter, FaGithub, FaLaptop } from "react-icons/fa";

export default function Footer() {
	const today = new Date();
	return (
		<footer className='flex flex-1 flex-col bg-slate-500 text-white text-xl text-center min-h-48 p-4'>
			<div className='prose prose-xl mx-auto flex flex-col justify-between sm:flex-row text-center'>
				<div className='flex flex-row justify-center sm:justify-evenly align-middle gap-4 text-white text-4xl lg:text-5xl'>
					<Link
						href='https://www.youtube.com/'
						className='text-white/90 hover:text-white'
					>
						<FaYoutube />
					</Link>
					<Link
						href='https://twitter.com/'
						className='text-white/90 hover:text-white'
					>
						<FaTwitter />
					</Link>
					<Link
						href='https://github.com/gipo-ski'
						className='text-white/90 hover:text-white'
					>
						<FaGithub />
					</Link>
					<Link
						href='https://kunle-o-portfolio.netlify.app/'
						className='text-white/90 hover:text-white'
					>
						<FaLaptop />
					</Link>
				</div>
			</div>
			<p className='text-sm text-white mt-10'>
				Copyright &copy; [GIPOSKI] {today.getFullYear()}
			</p>
			<p className='text-white text-sm'>
				...with thanks to{" "}
				<Link
					href={`https://www.youtube.com/watch?v=843nec-IvW0&t=7510s`}
					className='font-semibold'
				>
					Dave Gray.
				</Link>
			</p>
		</footer>
	);
}
