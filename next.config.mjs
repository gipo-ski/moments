/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "jsonplaceholder.typicode.com",
				port: "",
				pathname: "/photos/**",
			},
			{
				protocol: "https",
				hostname: "upload.wikimedia.org",
				port: "",
				pathname: "wikipedia/commons/thumb/**",
			},
		],
	},
	images: {
		domains: ["via.placeholder.com", "upload.wikimedia.org"], // Add your domain(s) here
	},
};

export default nextConfig;

// https://jsonplaceholder.typicode.com/photos
// https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/FoosDublin210819-2_%2848620472807%29_%28cropped%29.jpg/50px-FoosDublin210819-2_%2848620472807%29_%28cropped%29.jpg
