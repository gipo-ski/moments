import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import NavBar from "./components/NavBar";
import Search from "./components/Search";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "My Moments",
	description: "Created by GIPOSKI",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className={`{inter.className} flex flex-col`}>
				<NavBar />
				{children}
				<Footer />
			</body>
		</html>
	);
}
