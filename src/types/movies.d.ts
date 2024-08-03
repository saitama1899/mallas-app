export interface Movie {
	id: number;
	title: string;
	poster_path: string;
	favorite?: boolean;
}

export interface Movies {
	page: number;
	results: Movie[];
	total_pages: number;
	total_results: number;
}
