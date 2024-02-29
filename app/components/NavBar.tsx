import Link from "next/link";

// import Search from "./Search";

export default function NavBar() {
	return (
		// className='bg-slate-600 p-4 sticky top-0 drop-shadow-xl z-10'
		<nav className='flex flex-1 bg-slate-500 text-white text-xl justify-between text-center p-2 sticky top-0 drop-shadow-xl z-10'>
			<div className='prose prose-xl mx-auto flex flex-col justify-between sm:flex-row text-center'>
				<div className='flex flex-row p-2 justify-center items-center'>
					{/* <Search /> */}
				</div>
				<div className='flex flex-row p-2 justify-center items-center'>
					{/* NavBar */}
					<ul className='flex flex-row p-2 justify-center items-center list-none'>
						<li>
							<Link
								href={"/"}
								className='text-2xl px-4 py-2 m-0.5 text-white bg-slate-900 rounded no-underline'
							>
								Home
							</Link>
						</li>
						<li>
							<Link
								href={"/allposts"}
								className='text-2xl px-4 py-2 m-0.5 text-white bg-slate-900 rounded no-underline'
							>
								BlogPosts
							</Link>
						</li>
						<li>
							<Link
								href={"/about"}
								className='text-2xl px-4 py-2 m-0.5 text-white bg-slate-900 rounded no-underline'
							>
								About
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}
