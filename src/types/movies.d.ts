export interface Movie {
	id: number;
	title: string;
	poster_path: string;
}

export interface Movies {
	page: number;
	results: Movie[];
	total_pages: number;
	total_results: number;
}
