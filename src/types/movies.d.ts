interface Movie {
	id: number;
	title: string;
	poster_path: string;
	favorite?: boolean;
}

interface Movies {
	page: number;
	results: Movie[];
	total_pages: number;
	total_results: number;
}
interface MovieDetailProps {
	initialMovie: Movie | null;
}
interface MovieDetail {
	id: number;
	title: string;
	favorite?: boolean;
	production_companies?: {
		id: number;
		logo_path: string;
		name: string;
	}[];
	backdrop_path?: string;
	overview?: string;
	release_date?: string;
	vote_average?: number;
	vote_count?: number;
}

export type { Movie, Movies, MovieDetailProps, MovieDetail };
