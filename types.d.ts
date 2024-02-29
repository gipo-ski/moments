type BlogPost = {
	id: string;
	title: string;
	date: string;
	thumbnail?: {
		source: string;
		width: number;
		height: number;
	};
};

// types for wikiSearch functionality
type Result = {
	pageid: string;
	title: string;
	extract: string;
	thumbnail?: {
		source: string;
		width: number;
		height: number;
	};
};

type SearchResult = {
	query?: {
		pages?: BlogPost[];
	};
};